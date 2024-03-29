<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('shop_products', function (Blueprint $table) {
            //
            $table->string('seo_keywords')->nullable()->after('seo_description');
        });
        Schema::table('shop_categories', function (Blueprint $table) {
            //
            $table->string('seo_keywords')->nullable()->after('seo_description');
        });
        Schema::table('blog_posts', function (Blueprint $table) {
            //
            $table->string('seo_keywords')->nullable()->after('seo_description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_products', function (Blueprint $table) {
            //
            $table->dropColumn('seo_keywords');

        });
        Schema::table('shop_categories', function (Blueprint $table) {
            //
            $table->dropColumn('seo_keywords');
        });
        Schema::table('blog_posts', function (Blueprint $table) {
            //
            $table->dropColumn('seo_keywords');
        });
    }
};
