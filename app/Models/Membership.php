<?php

namespace App\Models;

use Laravel\Jetstream\Membership as JetstreamMembership;
use WendellAdriel\Lift\Lift;

class Membership extends JetstreamMembership
{
    use Lift;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;
}
