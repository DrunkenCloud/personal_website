export default function Projects() {
  return (
    <div>
      <div className="heading-container">
        <h3 style={{ textAlign: "center" }}>
          Click on the tiles below to view more details about each project on github.
        </h3>
      </div>
      <div className="project-container">
        <a
          href="https://github.com/DrunkenCloud/fou_text_editor"
          target="_blank"
          rel="noopener noreferrer"
          className="tile"
        >
          <div className="tile-header yuji-mai-regular">Fou</div>
          <div className="tile-description">
            This is a very simple text editor I made in C. Just a simple project to learn the C language more, about TUI
            and some data structures.
          </div>
        </a>
        <a
          href="https://github.com/DrunkenCloud/fake_space_order"
          target="_blank"
          rel="noopener noreferrer"
          className="tile"
        >
          <div className="tile-header yuji-mai-regular">Fake Space Order</div>
          <div className="tile-description">
            A simple shooter made using pygame. Name quite remenescent of Fate GO lol. I wanted to get my hands dirty on
            game dev so did this.
          </div>
        </a>
        <a href="https://github.com/DrunkenCloud/rasca" target="_blank" rel="noopener noreferrer" className="tile">
          <div className="tile-header yuji-mai-regular">Rasca</div>
          <div className="tile-description">
            A simple 3D Ray Tracer made using C++. I wanted to program a software using C++ knowledge I learnt from the
            Programming in Modern C++ course on NPTEL. I also wanted to learn how ray tracing rendering happened.
          </div>
        </a>
        <a href="https://github.com/DrunkenCloud/mouz" target="_blank" rel="noopener noreferrer" className="tile">
          <div className="tile-header yuji-mai-regular">Mouz</div>
          <div className="tile-description">
            A maze game I made in Java. I wanted to learn how java works and apply some of the game knowledge I learnt
            from Fake Space Order so I made this. Learnt some nice algorithms along the way like origin shift.
          </div>
        </a>
        <a
          href="https://github.com/DrunkenCloud/SpotifyPlaylistToYoutube"
          target="_blank"
          rel="noopener noreferrer"
          className="tile"
        >
          <div className="tile-header yuji-mai-regular">A Spotify Playlist to Youtube Converter</div>
          <div className="tile-description">
            Really started disliking using spotify so made a python program to convert it to a youtube playlist and ahve
            been using that forever since. Currently a proud youtube premium holder.
          </div>
        </a>
        <a
          href="https://github.com/DrunkenCloud/Galleria-Discord-Bot"
          target="_blank"
          rel="noopener noreferrer"
          className="tile"
        >
          <div className="tile-header yuji-mai-regular">Galaria</div>
          <div className="tile-description">
            The first even discord bot I made. A simple one that stored images using discord cdn links lol, good days. I
            went on to make more discord bots which you can find on my github account
          </div>
        </a>
        <a href="https://github.com/DrunkenCloud/Portfolio" target="_blank" rel="noopener noreferrer" className="tile">
          <div className="tile-header yuji-mai-regular">This Website</div>
          <div className="tile-description">
            Code for this current website. Just wanted to learn more about web dev outside of helping out in the backend
            for my friends and hckathons. Found frontend similar to game dev but I could be wrong.
          </div>
        </a>
      </div>
    </div>
  )
}

