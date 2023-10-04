export interface ElastictranscoderPreset {
    resource: Resource[];
}

export interface Resource {
    elastictranscoder_preset: ElastictranscoderPresetClass;
}

export interface ElastictranscoderPresetClass {
    /** (Optional, Forces new resource) Audio parameters object (documented below). */
    audio?:                any;
    /** (Optional, Forces new resource) Codec options for the audio parameters (documented below) */
    audio_codec_options?:  any;
    /** (Required, Forces new resource) The container type for the output file. Valid values are `flac`, `flv`, `fmp4`, `gif`, `mp3`, `mp4`, `mpg`, `mxf`, `oga`, `ogg`, `ts`, and `webm`. */
    container?:            any;
    /** (Optional, Forces new resource) A description of the preset (maximum 255 characters) */
    description?:          any;
    /** (Optional, Forces new resource) The name of the preset. (maximum 40 characters) */
    name?:                 any;
    /** (Optional, Forces new resource) Thumbnail parameters object (documented below) */
    thumbnails?:           any;
    /** (Optional, Forces new resource) Video parameters object (documented below) */
    video?:                any;
    /** (Optional, Forces new resource) Watermark parameters for the video parameters (documented below) */
    video_watermarks?:     any;
    /** The method of organizing audio channels and tracks. Use Audio:Channels to specify the number of channels in your output, and Audio:AudioPackingMode to specify the number of tracks and their relation to the channels. If you do not specify an Audio:AudioPackingMode, Elastic Transcoder uses SingleTrack. */
    audio_packing_mode?:   any;
    /** The bit rate of the video stream in the output file, in kilobits/second. You can configure variable bit rate or constant bit rate encoding. */
    bit_rate?:             any;
    /** The number of audio channels in the output file */
    channels?:             any;
    /** The video codec for the output file. Valid values are `gif`, `H.264`, `mpeg2`, `vp8`, and `vp9`. */
    codec?:                any;
    /** The sample rate of the audio stream in the output file, in hertz. Valid values are: `auto`, `22050`, `32000`, `44100`, `48000`, `96000` */
    sample_rate?:          any;
    /** The bit depth of a sample is how many bits of information are included in the audio samples. Valid values are `16` and `24`. (FLAC/PCM Only) */
    bit_depth?:            any;
    /** The order the bits of a PCM sample are stored in. The supported value is LittleEndian. (PCM Only) */
    bit_order?:            any;
    /** If you specified AAC for Audio:Codec, choose the AAC profile for the output file. */
    profile?:              any;
    /** Whether audio samples are represented with negative and positive numbers (signed) or only positive numbers (unsigned). The supported value is Signed. (PCM Only) */
    signed?:               any;
    /** The display aspect ratio of the video in the output file. Valid values are: `auto`, `1:1`, `4:3`, `3:2`, `16:9`. (Note; to better control resolution and aspect ratio of output videos, we recommend that you use the values `max_width`, `max_height`, `sizing_policy`, `padding_policy`, and `display_aspect_ratio` instead of `resolution` and `aspect_ratio`.) */
    aspect_ratio?:         any;
    /** The format of thumbnails, if any. Valid formats are jpg and png. */
    format?:               any;
    /** The approximate number of seconds between thumbnails. The value must be an integer. The actual interval can vary by several seconds from one thumbnail to the next. */
    interval?:             any;
    /** The maximum height of the watermark. */
    max_height?:           any;
    /** The maximum width of the watermark. */
    max_width?:            any;
    /** When you set PaddingPolicy to Pad, Elastic Transcoder might add black bars to the top and bottom and/or left and right sides of the output video to make the total size of the output video match the values that you specified for `max_width` and `max_height`. */
    padding_policy?:       any;
    /** The width and height of the video in the output file, in pixels. Valid values are `auto` and `widthxheight`. (see note for `aspect_ratio`) */
    resolution?:           any;
    /** A value that controls scaling of the watermark. Valid values are: `Fit`, `Stretch`, `ShrinkToFit` */
    sizing_policy?:        any;
    /** The value that Elastic Transcoder adds to the metadata in the output file. If you set DisplayAspectRatio to auto, Elastic Transcoder chooses an aspect ratio that ensures square pixels. If you specify another option, Elastic Transcoder sets that value in the output file. */
    display_aspect_ratio?: any;
    /** Whether to use a fixed value for Video:FixedGOP. Not applicable for containers of type gif. Valid values are true and false. Also known as, Fixed Number of Frames Between Keyframes. */
    fixed_gop?:            any;
    /** The frames per second for the video stream in the output file. The following values are valid: `auto`, `10`, `15`, `23.97`, `24`, `25`, `29.97`, `30`, `50`, `60`. */
    frame_rate?:           any;
    /** The maximum number of frames between key frames. Not applicable for containers of type gif. */
    keyframes_max_dist?:   any;
    /** If you specify auto for FrameRate, Elastic Transcoder uses the frame rate of the input video for the frame rate of the output video, up to the maximum frame rate. If you do not specify a MaxFrameRate, Elastic Transcoder will use a default of 30. */
    max_frame_rate?:       any;
    /** The horizontal position of the watermark unless you specify a nonzero value for `horzontal_offset`. */
    horizontal_align?:     any;
    /** The amount by which you want the horizontal position of the watermark to be offset from the position specified by `horizontal_align`. */
    horizontal_offset?:    any;
    /** A unique identifier for the settings for one watermark. The value of Id can be up to 40 characters long. You can specify settings for up to four watermarks. */
    id?:                   any;
    /** A percentage that indicates how much you want a watermark to obscure the video in the location where it appears. */
    opacity?:              any;
    /** A value that determines how Elastic Transcoder interprets values that you specified for `video_watermarks.horizontal_offset`, `video_watermarks.vertical_offset`, `video_watermarks.max_width`, and `video_watermarks.max_height`. Valid values are `Content` and `Frame`. */
    target?:               any;
    /** The vertical position of the watermark unless you specify a nonzero value for `vertical_align`. Valid values are `Top`, `Bottom`, `Center`. */
    vertical_align?:       any;
    /** The amount by which you want the vertical position of the watermark to be offset from the position specified by `vertical_align` */
    vertical_offset?:      any;
    /** The codec profile that you want to use for the output file. (H.264/VP8 Only) */
    Profile?:              any;
    /** The H.264 level that you want to use for the output file. Elastic Transcoder supports the following levels: `1`, `1b`, `1.1`, `1.2`, `1.3`, `2`, `2.1`, `2.2`, `3`, `3.1`, `3.2`, `4`, `4.1` (H.264 only) */
    Level?:                any;
    /** The maximum number of previously decoded frames to use as a reference for decoding future frames. Valid values are integers 0 through 16. (H.264 only) */
    MaxReferenceFrames?:   any;
    /** The maximum number of kilobits per second in the output video. Specify a value between 16 and 62,500 inclusive, or `auto`. (Optional, H.264/MPEG2/VP8/VP9 only) */
    MaxBitRate?:           any;
    /** The maximum number of kilobits in any x seconds of the output video. This window is commonly 10 seconds, the standard segment duration when you're using ts for the container type of the output video. Specify an integer greater than 0. If you specify MaxBitRate and omit BufferSize, Elastic Transcoder sets BufferSize to 10 times the value of MaxBitRate. (Optional, H.264/MPEG2/VP8/VP9 only) */
    BufferSize?:           any;
    /**  The interlace mode for the output video. (Optional, H.264/MPEG2 Only) */
    InterlacedMode?:       any;
    /** The color space conversion Elastic Transcoder applies to the output video. Valid values are `None`, `Bt709toBt601`, `Bt601toBt709`, and `Auto`. (Optional, H.264/MPEG2 Only) */
    ColorSpaceConversion?: any;
    /** The sampling pattern for the chroma (color) channels of the output video. Valid values are `yuv420p` and `yuv422p`. */
    ChromaSubsampling?:    any;
    /** The number of times you want the output gif to loop (Gif only) */
    LoopCount?:            any;
}