<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class TvLink extends Model
{
    use CrudTrait;

    /*
    |--------------------------------------------------------------------------
    | GLOBAL VARIABLES
    |--------------------------------------------------------------------------
    */

    protected $table = 'tv_links';
    // protected $primaryKey = 'id';
    // public $timestamps = false;
    protected $guarded = ['id'];
    // protected $fillable = [];
    // protected $hidden = [];
    // protected $dates = [];

    /*
    |--------------------------------------------------------------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */

    /**
     * Convert any YouTube URL format (watch?v=, youtu.be/, shorts/, embed/, iframe) into a proper embed URL.
     *
     * @param string|null $url
     * @return string|null
     */
    public static function formatYoutubeEmbedUrl($url)
    {
        if (empty($url)) {
            return $url;
        }

        $url = trim($url);

        // If an <iframe> tag was pasted, extract the src URL
        if (preg_match('/<iframe\b[^>]*\bsrc=["\']([^"\']+)["\']/i', $url, $matches)) {
            $url = $matches[1];
        }

        // Already a standard YouTube embed URL
        if (preg_match('/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i', $url, $matches)) {
            return 'https://www.youtube.com/embed/' . $matches[1];
        }

        // Standard watch, shorts, or short youtu.be links
        if (preg_match('/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/i', $url, $matches)) {
            return 'https://www.youtube.com/embed/' . $matches[1];
        }

        return $url;
    }

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | SCOPES
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | ACCESSORS
    |--------------------------------------------------------------------------
    */

    public function getEmbedLinkAttribute($value)
    {
        return self::formatYoutubeEmbedUrl($value);
    }

    /*
    |--------------------------------------------------------------------------
    | MUTATORS
    |--------------------------------------------------------------------------
    */

    public function setEmbedLinkAttribute($value)
    {
        $this->attributes['embed_link'] = self::formatYoutubeEmbedUrl($value);
    }
}
