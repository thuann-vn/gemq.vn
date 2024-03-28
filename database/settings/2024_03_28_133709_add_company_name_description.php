<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration {
    public function up(): void
    {
        $this->migrator->add('general.company_name', 'Công ty TNHH GEMQ');
        $this->migrator->add('general.company_description', 'Công ty GEMQ chuyên gia công kim loại tấm, sắt hộp, cắt laser kim loại tấm, đột CNC kim loại tấm theo yêu cầu, sơn tĩnh điện tự động, hàn, chấn, dập liên hoàn ......tại TPHCM và các tỉnh');

    }
};
