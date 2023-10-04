export interface SecretsmanagerRandomPassword {
    data: Datum[];
}

export interface Datum {
    secretsmanager_random_password: SecretsmanagerRandomPasswordClass;
}

export interface SecretsmanagerRandomPasswordClass {
    /** (Optional) String of the characters that you don't want in the password. */
    exclude_characters?:         any;
    /** (Optional) Specifies whether to exclude lowercase letters from the password. */
    exclude_lowercase?:          any;
    /** (Optional) Specifies whether to exclude numbers from the password. */
    exclude_numbers?:            any;
    /** (Optional) Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ .`` */
    exclude_punctuation?:        any;
    /** (Optional) Specifies whether to exclude uppercase letters from the password. */
    exclude_uppercase?:          any;
    /** (Optional) Specifies whether to include the space character. */
    include_space?:              any;
    /** (Optional) Length of the password. */
    password_length?:            any;
    /** (Optional) Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. */
    require_each_included_type?: any;
}