<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id(); // Creates an auto-incrementing primary key called 'id'
            $table->string('ip')->unique(); // String for IP address, set as unique to avoid duplicates
            $table->string('label')->nullable(); // String for label, allows null values
            $table->timestamps(); // Creates 'created_at' and 'updated_at' timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
