<?php

namespace App\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

trait HandlesSlug
{
    /**
     * @param  array<string,mixed>  $data
     */
    public static function createSlug(Request|FormRequest $request, string $entity, ?array &$data = null): ?string
    {
        $slug = self::slugify($request, $entity);
        if ($slug && isset($data)) {
            $data['slug'] = $slug;
        }

        return $slug;
    }

    /**
     * @param  array<string,mixed>  $data
     */
    public static function updateSlug(Request|FormRequest $request, string|Model $entity, ?array &$data = null): ?string
    {
        $slug = self::slugify($request, $entity);
        if ($slug && isset($data)) {
            $data['slug'] = $slug;
        }

        return $slug;
    }

    public static function slugify(Request|FormRequest $request, string|Model $entity, string $name = 'slug'): ?string
    {
        $slug = null;

        if (
            is_string($entity)
            || ($request->has($name) && $request->$name !== $entity->$name)
            || $request->has('name') && $request->name !== $entity->name
            || $request->has('title') && $request->title !== $entity->title
        ) {
            /** @var string */
            $slug = ($request->$name ?: $request->name) ?: $request->title;
            $slug = self::slug($slug, $entity, $name);
        }

        return $slug;
    }

    public static function slug(string $slug, string|Model $entity, string $name = 'slug'): ?string
    {
        $slug = Str::of($slug)->slug('-');

        if ($entity::where($name, $slug)->exists()) {
            $count = $entity::whereRaw("$name REGEXP '^{$slug}(-[0-9]*)?$'")->count();
            $slug = $count ? "{$slug}-{$count}" : $slug;
        }

        return $slug;
    }
}
