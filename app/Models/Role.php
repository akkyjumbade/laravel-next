<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'code',
        'description',
        'parent_id',
    ];
    protected $hidden = [
        'parent_id',
    ];
    function children(): HasMany {
       return $this->hasMany(self::class, 'parent_id');
    }
}
