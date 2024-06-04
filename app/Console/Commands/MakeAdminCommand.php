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
    protected $signature = 'make:admin {name} {username?} {email?} {password?} {role?}';

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
        $guard = config('admin.guard', 'admin');
        $role = $this->argument('role');
        $defaultRole = config('admin.role', 'admin');

        if (!$role && $this->confirm("Would you like to use the '{$defaultRole}' role?", true)) {
            $role = $defaultRole;
        } else {
            $role = $this->askWithCompletion('What is the admin role?', Role::where('guard_name', $guard)->get('name')->pluck('name')->toArray(), $defaultRole);
        }

        $this->info("Using '{$role}' role");
        $role = Role::firstOrCreate(['name' => $role], ['guard_name' => $guard]);

        $name = $this->argument('name');
        $this->info("Making '{$name}' with '{$role->name}' role");

        $username = $this->argument('username') ?? Str::slug($name);
        $email = $this->argument('email') ?? "{$username}@sikessem.com";
        
        $password = $this->argument('password') ?? Admin::where('username', $username)->first() ?: Admin::where('email', $email) ?: $this->secret('Please enter a password');

        $admin = Admin::updateOrCreate(['username' => $username, 'email' => $email], ['name' => $name, 'password' => Hash::make($password)]);
        $admin->assignRole($role);

        $this->info("Admin '{$admin->name}' created successfully with role '{$role->name}'!");
        $this->info('Details:');
        $this->table(['Name', 'Role', 'Guard', 'Username', 'Email'], [[$admin->name, $role->name, $guard, $admin->username, $admin->email]]);
    }
}
