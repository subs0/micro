export interface QuicksightTheme {
    resource: Resource[];
}

export interface Resource {
    quicksight_theme: QuicksightThemeClass;
}

export interface QuicksightThemeClass {
    /** (Required, Forces new resource) Identifier of the theme. */
    theme_id?:            any;
    /** (Required) The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis. */
    base_theme_id:        any;
    /** (Required) Display name of the theme. */
    name:                 any;
    configuration?:       Configuration;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:      any;
    permissions?:         Permissions;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Optional) A description of the current theme version being created/updated. */
    version_description?: any;
    /** (Optional) Color properties that apply to chart data colors. See [data_color_palette](#data_color_palette). */
    data_color_palette?:  DataColorPalette;
    /** (Optional) Display options related to sheets. See [sheet](#sheet). */
    sheet?:               Sheet;
    /** (Optional) Determines the typography options. See [typography](#typography). */
    typography?:          Typography;
    /** (Optional) Color properties that apply to the UI and to charts, excluding the colors that apply to data. See [ui_color_palette](#ui_color_palette). */
    ui_color_palette?:    UIColorPalette;
    /** (Optional) The display options for tiles. See [tile](#tile). */
    tile?:                Tile;
    /** (Optional) The layout options for tiles. See [tile_layout](#tile_layout). */
    tile_layout?:         TileLayout;
    /** (Optional) The border around a tile. See [border](#border). */
    border?:              Border;
    /** (Optional) The gutter settings that apply between tiles. See [gutter](#gutter). */
    gutter?:              Border;
    /** (Optional) The margin settings that apply around the outside edge of sheets. See [margin](#margin). */
    margin?:              Border;
    /** (Optional) Determines the list of font families. Maximum number of 5 items. See [font_families](#font_families). */
    font_families?:       FontFamilies;
}

export interface Border {
    /** (Optional) This Boolean value controls whether to display sheet margins. */
    show: any;
}

export interface Configuration {
    /** (Optional) Color properties that apply to chart data colors. See [data_color_palette](#data_color_palette). */
    data_color_palette: any;
    /** (Optional) Display options related to sheets. See [sheet](#sheet). */
    sheet:              any;
    /** (Optional) Determines the typography options. See [typography](#typography). */
    typography:         any;
    /** (Optional) Color properties that apply to the UI and to charts, excluding the colors that apply to data. See [ui_color_palette](#ui_color_palette). */
    ui_color_palette:   any;
}

export interface DataColorPalette {
    /** (Optional) List of hexadecimal codes for the colors. Minimum of 8 items and maximum of 20 items. */
    colors:           any;
    /** (Optional) The hexadecimal code of a color that applies to charts where a lack of data is highlighted. */
    empty_fill_color: any;
    /** (Optional) The minimum and maximum hexadecimal codes that describe a color gradient. List of exactly 2 items. */
    min_max_gradient: any;
}

export interface FontFamilies {
    /** (Optional) Font family name. */
    font_family: any;
}

export interface Permissions {
    /** (Required) List of IAM actions to grant or revoke permissions on. */
    actions:   any;
    /** (Required) ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values. */
    principal: any;
}

export interface Sheet {
    /** (Optional) The display options for tiles. See [tile](#tile). */
    tile:        any;
    /** (Optional) The layout options for tiles. See [tile_layout](#tile_layout). */
    tile_layout: any;
}

export interface Tile {
    /** (Optional) The border around a tile. See [border](#border). */
    border: any;
}

export interface TileLayout {
    /** (Optional) The gutter settings that apply between tiles. See [gutter](#gutter). */
    gutter: any;
    /** (Optional) The margin settings that apply around the outside edge of sheets. See [margin](#margin). */
    margin: any;
}

export interface Typography {
    /** (Optional) Determines the list of font families. Maximum number of 5 items. See [font_families](#font_families). */
    font_families: any;
}

export interface UIColorPalette {
    /** (Optional) Color (hexadecimal) that applies to selected states and buttons. */
    accent:               any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the accent color. */
    accent_foreground:    any;
    /** (Optional) Color (hexadecimal) that applies to error messages. */
    danger:               any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the error color. */
    danger_foreground:    any;
    /** (Optional) Color (hexadecimal) that applies to the names of fields that are identified as dimensions. */
    dimension:            any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the dimension color. */
    dimension_foreground: any;
    /** (Optional) Color (hexadecimal) that applies to the names of fields that are identified as measures. */
    measure:              any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the measure color. */
    measure_foreground:   any;
    /** (Optional) Color (hexadecimal) that applies to visuals and other high emphasis UI. */
    primary_background:   any;
    /** (Optional) Color (hexadecimal) of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on. */
    primary_foreground:   any;
    /** (Optional) Color (hexadecimal) that applies to the sheet background and sheet controls. */
    secondary_background: any;
    /** (Optional) Color (hexadecimal) that applies to any sheet title, sheet control text, or UI that appears over the secondary background. */
    secondary_foreground: any;
    /** (Optional) Color (hexadecimal) that applies to success messages, for example the check mark for a successful download. */
    success:              any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the success color. */
    success_foreground:   any;
    /** (Optional) Color (hexadecimal) that applies to warning and informational messages. */
    warning:              any;
    /** (Optional) Color (hexadecimal) that applies to any text or other elements that appear over the warning color. */
    warning_foreground:   any;
}