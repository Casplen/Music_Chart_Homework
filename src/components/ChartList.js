import ChartDetails from './ChartDetails'

const ChartList = ({songs}) => {
    const ChartDetailsComponents = songs.map(song => {
        return <ChartDetails
                key={song["id"]["attributes"]["im:id"]}
                songTitle={song["im:name"]["label"]}
                songArtist={song["im:artist"]["label"]} ></ChartDetails>
    })
    return (
        <>
            <h1>Top 20 Songs</h1>
            <ol>
                {ChartDetailsComponents}
            </ol>
        </>
    )
}

export default ChartList