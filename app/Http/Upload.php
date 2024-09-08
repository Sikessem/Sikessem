<?php

namespace App\Http;

use Illuminate\Http\UploadedFile;

class Upload
{
    public function __construct(protected UploadedFile $file) {}

    public static function from(UploadedFile $file): static
    {
        return new static($file);
    }

    public static function fromFile(string $path, ?string $originalName = null): static
    {
        return static::from(new UploadedFile($path, $originalName ?? basename($path)));
    }

    public static function fromUrl($url): static
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        $data = curl_exec($ch);
        curl_close($ch);
        $filename = tempnam(sys_get_temp_dir(), 'uploads');
        file_put_contents($filename, $data);

        return static::fromFile($filename, basename((string) $url));
    }

    protected ?string $name = null;

    public function asName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function toPath(string $path, array|string $options = 'public'): string|false
    {
        if (isset($this->name)) {
            $path = $this->file->storeAs($path, $this->name, $options);
            unset($this->name);

            return $path;
        }

        return $this->file->store($path, $options);
    }
}
