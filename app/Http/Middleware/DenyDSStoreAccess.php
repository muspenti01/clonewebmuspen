<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DenyDSStoreAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Get the path of the requested file
        $path = $request->path();

        // Check if the requested path ends with ".DS_Store"
        if (str_ends_with($path, '.DS_Store')) {
            abort(403, 'Access denied');
        }

        return $next($request);
    }
}
