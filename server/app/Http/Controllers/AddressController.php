<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $addresses = Address::all();
        return response()->json($addresses);
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
        //     'ip' => 'required|ip|unique:addresses',
        //     'label' => 'nullable|string',
        // ]);

        $address = Address::create($request->all());
        return response()->json($address, 201); // Created status code
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $address = Address::find($id);

        if (!$address) {
            return response()->json(['message' => 'Address not found'], 404); // Not Found status code
        }

        return response()->json($address);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *  @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $address = Address::find($id);

        if (!$address) {
            return response()->json(['message' => 'Address not found'], 404); // Not Found status code
        }

        $address->update($request->all());

        return response()->json($address);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $address = Address::find($id);

        if (!$address) {
            return response()->json(['message' => 'Address not found'], 404); // Not Found status code
        }

        $address->delete();

        return response()->json(['message' => 'Address deleted successfully']);
    }
}
