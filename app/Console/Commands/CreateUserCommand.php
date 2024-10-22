<?php

namespace App\Console\Commands;

use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;

use function Laravel\Prompts\form;
use function Laravel\Prompts\select;
use function Laravel\Prompts\text;

class CreateUserCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user';

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
        $roleOptions = Role::pluck('title', 'id')->all();
        $responses = form()
            ->text('Username', required: true, name: 'username')
            ->password('Password?', validate: ['password' => 'min:8'], name: 'password')
            ->text("Email", "Email", '', true, ["string", "email", "max:200", "unique:users,email"], name: 'email')
            ->text("First name", "", '', true, ["string", "max:200",], name: 'first_name')
            ->text("Last name", "", '', true, ["string", "max:200",], name: 'last_name')
            ->text("Mobile number", "10 digits only", '', true, ["digits:10", "max:200",], name: 'mobile_number')
            ->select(
                label: 'What role should the user have?',
                options: $roleOptions,
                name: 'role_id'
            )
            ->submit();
        $responses['name'] = $responses['first_name'] . ' ' . $responses['last_name'];
        // $user = User::create(compact(''));
        dump(compact('responses'));
    }
}
