export interface QuicksightTheme {
    data: Datum[];
}

export interface Datum {
    quicksight_theme: QuicksightThemeClass;
}

export interface QuicksightThemeClass {
    /** Identifier of the theme. */
    theme_id?:       any;
    /** AWS account ID. */
    aws_account_id?: any;
}