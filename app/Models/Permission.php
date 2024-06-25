<?php

namespace App\Models;

use Spatie\Permission\Models\Permission as BasePermission;
use WendellAdriel\Lift\Lift;

class Permission extends BasePermission
{
    use Lift;
}
