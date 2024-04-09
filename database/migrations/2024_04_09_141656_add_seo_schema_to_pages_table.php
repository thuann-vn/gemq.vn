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
        Schema::table('pages', function (Blueprint $table) {
            //
            $table->text('seo_schema')->nullable()->after('seo_keywords');
        });
        Schema::table('shop_products', function (Blueprint $table) {
            //
            $table->text('seo_schema')->nullable()->after('seo_keywords');
        });
        Schema::table('shop_categories', function (Blueprint $table) {
            //
            $table->text('seo_schema')->nullable()->after('seo_keywords');
        });
        Schema::table('blog_posts', function (Blueprint $table) {
            //
            $table->text('seo_schema')->nullable()->after('seo_keywords');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            //
            $table->dropColumn('seo_schema');
        });
        Schema::table('shop_products', function (Blueprint $table) {
            //
            $table->dropColumn('seo_schema');
        });
        Schema::table('shop_categories', function (Blueprint $table) {
            //
            $table->dropColumn('seo_schema');
        });
        Schema::table('blog_posts', function (Blueprint $table) {
            //
            $table->dropColumn('seo_schema');
        });
    }
};
