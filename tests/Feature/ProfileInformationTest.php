<?php

use App\Models\User;
use Laravel\Jetstream\Http\Livewire\UpdateProfileInformationForm;
use Livewire\Livewire;

test('current profile information is available', function () {
    $this->actingAs($user = User::factory()->create());

    $component = Livewire::test(UpdateProfileInformationForm::class);

    expect($component->state['name'])->toEqual($user->name);
    expect($component->state['email'])->toEqual($user->email);
});

test('profile information can be updated', function () {
    $this->actingAs($user = User::factory()->create());

    $testProfile = Livewire::test(UpdateProfileInformationForm::class);

    expect($testProfile->get('state'))->toEqual(array_merge([
        'email' => $user->email,
    ], $user->withoutRelations()->toArray()));

    $testProfile
        ->set('state', ['firstname' => 'Test Name', 'email' => 'test@example.com'])
        ->call('updateProfileInformation');

    expect($testProfile->get('state'))
        ->firstname->toEqual('Test Name')
        ->email->toEqual('test@example.com');

    expect($user->fresh())
        ->firstname->toEqual('Test Name')
        ->email->toEqual('test@example.com');
});
