# YouTube Video to Blog Post Generator

This repository provides a tool to generate a blog post from a YouTube video by fetching its transcription and utilizing OpenAI's language models.

## Features

- Fetches the transcription of a YouTube video.
- Generates a comprehensive blog post based on the video's content.
- Utilizes OpenAI's language models for content generation.

## Requirements

- Node.js installed on your system.
- Yarn package manager.
- OpenAI API key.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install the dependencies:**

   ```bash
   yarn install
   ```

3. **Set up OpenAI API Key:**

   Make sure to set your OpenAI API key as an environment variable or in a configuration file as required by the application.

## Usage

To generate a blog post from a YouTube video, run the following command:

```bash
yarn start <videoid>
```

Replace `<videoid>` with the ID of the YouTube video you want to process.

### Example

If you have a YouTube video URL like:

```
https://www.youtube.com/watch?v=bAAbrhb3QoM
```

Extract the video ID (`bAAbrhb3QoM`) and run:

```bash
yarn start bAAbrhb3QoM
```

## Output

The generated blog post will be saved or displayed according to the application's configuration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to open an issue or contact the repository owner.
