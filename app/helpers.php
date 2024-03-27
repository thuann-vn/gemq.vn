<?php

use App\Settings\GeneralSettings;

function getGeneralSettings($key)
{
    $generalSettings = app(GeneralSettings::class);
    $value = $generalSettings->$key;
    switch ($key) {
        case 'site_favicon':
        case 'site_logo':
            return $value ? asset('storage/' . $value) : null;
        default:
            return $value;
    }
}
