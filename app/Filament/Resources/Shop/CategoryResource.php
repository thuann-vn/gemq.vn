<?php

namespace App\Filament\Resources\Shop;

use AmidEsfahani\FilamentTinyEditor\TinyEditor;
use App\Filament\Form\Fields\SEOFields;
use App\Filament\Resources\Shop\CategoryResource\Pages;
use App\Models\Shop\Category;
use Filament\Forms;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $slug = 'shop/categories';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $label = 'service';

    protected static ?string $navigationLabel = 'Services';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                    ->schema([
                        Tabs::make('Tabs')
                            ->tabs([
                                Tabs\Tab::make('General Information')
                                    ->icon('heroicon-o-information-circle')
                                    ->schema([
                                        Forms\Components\FileUpload::make('image')
                                            ->image(),
                                        Forms\Components\Grid::make()
                                            ->schema([
                                                Forms\Components\TextInput::make('name')
                                                    ->required()
                                                    ->maxLength(255)
                                                    ->live(onBlur: true)
                                                    ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),

                                                Forms\Components\TextInput::make('slug')
                                                    ->dehydrated()
                                                    ->required()
                                                    ->maxLength(255)
                                                    ->unique(Category::class, 'slug', ignoreRecord: true),
                                            ]),

                                        Forms\Components\Select::make('parent_id')
                                            ->label('Parent')
                                            ->relationship('parent', 'name', fn(Builder $query) => $query->where('parent_id', null))
                                            ->searchable()
                                            ->placeholder('Select parent category'),

                                        TinyEditor::make('description')
                                            ->label('Description'),
                                    ]),
                                Tabs\Tab::make('SEO')
                                    ->icon('heroicon-o-globe-alt')
                                    ->schema([
                                        SEOFields::create(),
                                    ]),

                            ])
                            ->persistTabInQueryString(),
                    ])
                    ->columnSpan(['lg' => fn (?Category $record) => $record === null ? 3 : 2]),
                Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Toggle::make('is_visible')
                            ->label('Visible to customers.')
                            ->default(true),
                        Forms\Components\Placeholder::make('created_at')
                            ->label('Created at')
                            ->content(fn (Category $record): ?string => $record->created_at?->diffForHumans()),

                        Forms\Components\Placeholder::make('updated_at')
                            ->label('Last modified at')
                            ->content(fn (Category $record): ?string => $record->updated_at?->diffForHumans()),
                    ])
                    ->columnSpan(['lg' => 1])
                    ->hidden(fn (?Category $record) => $record === null),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('parent.name')
                    ->label('Parent')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_visible')
                    ->label('Visibility')
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Updated Date')
                    ->date()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->groupedBulkActions([
                Tables\Actions\DeleteBulkAction::make()
                    ->action(fn (Collection $records) => $records->each->delete()),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //            RelationManagers\ProductsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
