<?php

namespace App\Models\Blog;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\Tags\HasTags;

class Post extends Model
{
    use HasFactory;
    use HasTags;

    /**
     * @var string
     */
    protected $table = 'blog_posts';

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'date',
    ];

    protected $appends = ['excerpt'];

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class, 'blog_author_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'blog_category_id');
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function getExcerptAttribute(): string
    {
        // temp var to capture the p tag(s)
        $matches = array();
        if (preg_match('/<p>[^>]+<\/p>/', $this->content, $matches)) {
            // found <p></p>
            $p = strip_tags($matches[0]);
        } else {
            $p = strip_tags($this->content);
        }
        //shorten without cutting words
        $p = self::short_str($p, 200);

        // remove trailing comma, full stop, colon, semicolon, 'a', 'A', space
        $p = rtrim($p, ',.;: aA');

        // return nothing if just spaces or too short
        if (ctype_space($p) || $p == '' || strlen($p) < 10) {
            return '';
        }

        return $p;
    }

    /**
     * shorten string but not cut words
     *
     **/
    public static function short_str($str, $len, $cut = false)
    {
        if (strlen($str) <= $len) {
            return $str;
        }
        $string = ($cut ? substr($str, 0, $len) : substr($str, 0, strrpos(substr($str, 0, $len), ' ')));
        return $string;
    }
}
