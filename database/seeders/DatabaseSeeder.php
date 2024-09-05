<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->withPersonalTeam()->create();

        $this->call(AdminSeeder::class);
        $this->call(CountrySeeder::class);
        User::factory()->withPersonalTeam()->create([
            'firstname' => 'Kessé Emmanuel',
            'lastname' => 'Sigui',
            'gender' => 'male',
            'username' => 'siguici',
            'email' => 'siguici@proton.me',
        ])->has('location');
    }
}
