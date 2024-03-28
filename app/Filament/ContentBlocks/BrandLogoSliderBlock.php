<?php

namespace App\Filament\ContentBlocks;

use App\Filament\ContentBlocks\Concerns\HasBlockOption;
use App\Models\Shop\Brand;
use Filament\Forms\Components\TextInput;
use Spatie\MediaLibrary\HasMedia;
use Statikbe\FilamentFlexibleContentBlocks\ContentBlocks\AbstractContentBlock;
use Statikbe\FilamentFlexibleContentBlocks\Models\Contracts\HasContentBlocks;

class BrandLogoSliderBlock extends AbstractContentBlock
{
    use HasBlockOption;

    public ?string $title;

    public ?array $categoryIds;

    public ?array $brands;

    /**
     * Create a new component instance.
     */
    public function __construct(HasContentBlocks & HasMedia $record, ?array $blockData)
    {
        parent::__construct($record, $blockData);

        $this->title = $blockData['title'] ?? null;
        $this->categoryIds = $blockData['category_ids'] ?? null;
        $this->brands = Brand::query()->where('is_visible', true)->get()->toArray();
        $this->setBlockOption($blockData);
    }

    public static function getNameSuffix(): string
    {
        return '';
    }

    public static function getIcon(): string
    {
        return 'heroicon-o-rectangle-group';
    }

    /**
     * {@inheritDoc}
     */
    protected static function makeFilamentSchema(): array|\Closure
    {
        return [
            TextInput::make('title')
                ->label('Title')
                ->maxLength(255),
            \App\Filament\Form\Fields\Blocks\BlockOptionField::create(static::class),
        ];
    }

    public function getSearchableContent(): array
    {
        $searchable = [];

        return $searchable;
    }

    public static function getName(): string
    {
        return 'Brand Logo Slider';
    }

    public static function getLabel(): string
    {
        return 'Brand Logo Slider';
    }

    public static function getFieldLabel(string $field): string
    {
        return 'Brand Logo Slider';
    }

    public function render()
    {
        // TODO: Implement render() method.
    }
}
