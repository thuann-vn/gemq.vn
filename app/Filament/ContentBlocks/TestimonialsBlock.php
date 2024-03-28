<?php

namespace App\Filament\ContentBlocks;

use App\Filament\ContentBlocks\Concerns\HasBlockOption;
use App\Models\Testimonial;
use Filament\Forms\Components\TextInput;
use Spatie\MediaLibrary\HasMedia;
use Statikbe\FilamentFlexibleContentBlocks\ContentBlocks\AbstractContentBlock;
use Statikbe\FilamentFlexibleContentBlocks\Models\Contracts\HasContentBlocks;

class TestimonialsBlock extends AbstractContentBlock
{
    use HasBlockOption;

    public ?string $title;

    public ?array $items;

    /**
     * Create a new component instance.
     */
    public function __construct(HasContentBlocks & HasMedia $record, ?array $blockData)
    {
        parent::__construct($record, $blockData);

        $this->title = $blockData['title'] ?? null;
        $this->items = Testimonial::query()->where('visible', true)->get()->toArray();
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
        return 'Testimonials';
    }

    public static function getLabel(): string
    {
        return 'Testimonials';
    }

    public static function getFieldLabel(string $field): string
    {
        return 'Testimonials';
    }

    public function render()
    {
        // TODO: Implement render() method.
    }
}
