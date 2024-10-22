<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use function Laravel\Prompts\form;

class CreatePackageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:package';

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
        $permissionsOptions = [];
        $responses = form()
            ->text('name', required: true)
            ->multiselect(
                label: 'What permissions should be assigned?',
                options: ['Read', 'Create', 'Update', 'Delete'],
                default: ['Read', 'Create'],
                hint: 'Permissions may be updated at any time.'
            )
            ->confirm('Are you sure?', required: true)
            ->submit();
        dd($responses);
    }
}
