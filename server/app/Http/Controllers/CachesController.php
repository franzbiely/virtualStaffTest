<?php

namespace App\Http\Controllers;

use App\Models\Caches;
use Illuminate\Http\Request;

class CachesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cacheses = Caches::all();
        return response()->json($cacheses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // $validatedData = $request->validate([
        //     'ip' => 'required|ip|unique:cacheses',
        //     'label' => 'nullable|string',
        // ]);

        $caches = Caches::create($request->all());
        return response()->json($caches, 201); // Created status code
    }
}
