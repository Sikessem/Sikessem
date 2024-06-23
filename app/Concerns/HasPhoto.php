<?php

namespace App\Concerns;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasPhoto
{
    public function updatePhoto(UploadedFile $photo, string $storagePath = 'photos'): void
    {
        tap($this->photo_path, function ($previous) use ($photo, $storagePath) {
            $this->forceFill([
                'photo_path' => $photo->storePublicly(
                    $storagePath, ['disk' => $this->photoDisk()]
                ),
            ])->save();

            if ($previous) {
                Storage::disk($this->photoDisk())->delete($previous);
            }
        });
    }

    public function deletePhoto(): void
    {
        if (is_null($this->photo_path)) {
            return;
        }

        Storage::disk($this->photoDisk())->delete($this->photo_path);

        $this->forceFill([
            'photo_path' => null,
        ])->save();
    }

    public function photoUrl(): Attribute
    {
        return Attribute::get(function (): string {
            return $this->photo_path
                    ? Storage::disk($this->photoDisk())->url($this->photo_path)
                    : $this->defaultPhotoUrl();
        });
    }

    protected function defaultPhotoUrl(): string
    {
        $name = trim(collect(explode(' ', $this->name))->map(function ($segment) {
            return mb_substr($segment, 0, 1);
        })->join(' '));

        return 'https://ui-avatars.com/api/?name='.urlencode($name).'&color=7F9CF5&background=EBF4FF';
    }

    /**
     * Get the disk that profile photos should be stored on.
     *
     * @return string
     */
    protected function photoDisk()
    {
        return isset($_ENV['VAPOR_ARTIFACT_NAME']) ? 's3' : 'public';
    }
}
