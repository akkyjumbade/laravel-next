<?php

namespace App\Console\Commands;

use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

use function Laravel\Prompts\search;
use function Laravel\Prompts\text;

class CreateRoleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:role {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $title = text('Title?', 'Enter role title', '', true, ['string', 'min:2', 'max:100',]);
        $defaultCodename = Str::slug($title);
        $code = text('Codename?', 'slug or unique code', $defaultCodename, true, ['alpha_dash', 'min:2', 'max:100', 'unique:roles,code']);
        $description = text('Description? (optional)', '', '', false, ['string', 'min:2', 'max:200',]);
        $parent_id = search('Parent role?', function ($str) {
            if (strlen($str) <= 0) {
                return [];
            }
            return Role::where('title', 'like', "%$str%")->pluck('title', 'id')->all();
        });
        $newRole = Role::create(compact('title', 'code', 'description', 'parent_id'));
        dd($newRole);
    }
}
