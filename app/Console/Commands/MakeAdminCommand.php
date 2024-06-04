<?php

namespace App\Console\Commands;

use App\Models\Admin;
use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MakeAdminCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:admin {name : The full name of the admin} {--u|username= : The (unique) username of the admin} {--e|email= : The email address of the admin} {--p|password= : The password of the admin} {--r|role=admin : The role of the admin}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update or create an admin';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $username = $this->option('username');
        if (! $username) {
            $username = Str::slug($name);
            if (! $this->confirm("Would you like to use '{$username}' as the username?", true)) {
                $username = $this->ask('What is the admin username?');
            }
        }

        $email = $this->option('email');
        if (! $email) {
            $email = Admin::where('username', $username)->first()?->email ?? "{$username}@sikessem.com";
            if (! $this->confirm("Would you like to use '{$email}' as the email?", true)) {
                $email = $this->ask('What is the admin email address?');
            }
        }

        $exists = Admin::where('username', $username)->exists() || Admin::where('email', $email)->exists();

        $this->info(($exists ? 'Updating' : 'Creating') . " admin '{$name}' with username '{$username}' and email '{$email}'...");

        $password = $this->option('password');

        if ($password) {
            $this->warn('It is not safe to use the --password option');
        }

        if (!$password && (!$exists || $this->confirm("Would you like to change the admin password?", true))) {
            $password = $this->secret('Please enter the '.($exists ? 'new ' : '').'admin password');
            do {
                if (isset($confirmedPassword)) {
                    $this->error('Passwords do not match. Please try again.');
                }
                $confirmedPassword = $this->secret('Please confirm the '.($exists ? 'new ' : '').'admin password');
            } while ($password !== $confirmedPassword);
        }

        $admin = Admin::updateOrCreate(['username' => $username, 'email' => $email], ['name' => $name, 'password' => Hash::make($password)]);

        $guard = config('admin.guard', 'admin');
        $role = $this->option('role');
        $defaultRole = $exists ? $admin->roles->first()->name : config('admin.role', 'admin');

        if (!$role && $this->confirm("Would you like to use the '{$defaultRole}' role?", true)) {
            $role = $defaultRole;
        } else {
            $role = $this->askWithCompletion('What is the admin role?', Role::where('guard_name', $guard)->get('name')->pluck('name')->toArray(), $defaultRole);
        }

        $this->info("Using '{$role}' role");
        $role = Role::firstOrCreate(['name' => $role], ['guard_name' => $guard]);
        $admin->assignRole($role);

        $this->info("{$name}({$username})<{$email}> ".($exists ? 'created' : 'updated').' successfully!');

        $admins = Admin::with('roles')->get()->map(fn ($admin) => [$admin->name, $admin->roles->implode('name', ','), $admin->username, $admin->email])->toArray();
        $this->table(['Name', 'Role', 'Username', 'Email'], $admins);
    }
}
