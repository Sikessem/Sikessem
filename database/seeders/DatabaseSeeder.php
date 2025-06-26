<?php

namespace Database\Seeders;

use App\Http\Upload;
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
            'bio' => 'Senior Full-stack Web Developer',
            'username' => 'siguici',
            'email' => 'siguici@proton.me',
            'profile_photo_path' => Upload::fromFile(__DIR__.DIRECTORY_SEPARATOR.'profile.jpeg')->toPath('profiles') ?: null,
        ])->has('location');
    }
}
