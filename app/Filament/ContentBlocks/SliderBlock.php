<?php

namespace App\Filament\ContentBlocks;

use App\Filament\ContentBlocks\Concerns\HasBlockOption;
use App\Filament\Form\Fields\Blocks\BlockOptionField;
use App\Models\Slider;
use Filament\Forms\Components\Select;
use Spatie\MediaLibrary\HasMedia;
use Statikbe\FilamentFlexibleContentBlocks\ContentBlocks\AbstractContentBlock;
use Statikbe\FilamentFlexibleContentBlocks\Filament\Form\Fields\Blocks\BlockStyleField;
use Statikbe\FilamentFlexibleContentBlocks\Models\Contracts\HasContentBlocks;

class SliderBlock extends AbstractContentBlock
{
    use HasBlockOption;

    public ?string $sliderId;

    public ?Slider $slider;

    /**
     * Create a new component instance.
     */
    public function __construct(HasContentBlocks & HasMedia $record, ?array $blockData)
    {
        parent::__construct($record, $blockData);
        $this->sliderId = $blockData['slider_id'] ?? null;
        $this->slider = Slider::with(['items'])->where('id', $this->sliderId)->first();
        $this->setBlockOption($blockData);
    }

    public static function getNameSuffix(): string
    {
        return 'slider';
    }

    public static function getIcon(): string
    {
        return 'heroicon-o-photo';
    }

    /**
     * {@inheritDoc}
     */
    protected static function makeFilamentSchema(): array | \Closure
    {
        return [
            Select::make('slider_id')
                ->label(static::getFieldLabel('slider_id'))
                ->options(Slider::where('is_visible', true)->pluck('name', 'id')->toArray())
                ->required(),
            BlockOptionField::create(static::class),
        ];
    }

    public function getSearchableContent(): array
    {
        $searchable = [];

        return $searchable;
    }

    public static function getName(): string
    {
        return 'Slider';
    }

    public static function getLabel(): string
    {
        return 'Slider & Banner';
    }

    public static function getFieldLabel(string $field): string
    {
        return 'Slider';
    }

    public function render()
    {
        // TODO: Implement render() method.
    }
}
