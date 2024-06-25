<?php

namespace App\Models;

use Spatie\Permission\Models\Role as BaseRole;
use WendellAdriel\Lift\Lift;

class Role extends BaseRole
{
    use Lift;
}
