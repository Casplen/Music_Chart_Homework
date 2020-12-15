const ChartDetails = ({songTitle, songArtist}) => {
    return (
        <li>
            <span class="song">{songTitle}</span> by <span class="artist">{songArtist}</span>
        </li>
    )
}

export default ChartDetails