<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\CachesController;

Route::resource('address', AddressController::class);
Route::resource('cache', CachesController::class);
