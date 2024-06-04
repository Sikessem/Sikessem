<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Role;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = config('admin');

        $role = Role::create(['name' => $admin['role'] ?? 'admin', 'guard_name' => $admin['guard'] ?? 'admin']);

        unset($admin['role']);
        unset($admin['guard']);

        $admin['password'] = bcrypt($admin['password']);

        Admin::create($admin)->assignRole($role);
    }
}
