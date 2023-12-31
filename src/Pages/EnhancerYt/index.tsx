import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function EnhancerYt() {
  const code = `    {
      "version":"2.0.121",
      "settings":{
        "blur":0,
        "brightness":100,
        "contrast":100,
        "grayscale":0,
        "huerotate":0,
        "invert":0,
        "saturate":100,
        "sepia":0,
        "applyvideofilters":false,
        "backgroundcolor":"#000000",
        "backgroundopacity":85,
        "blackbars":false,
        "blockads":true,
        "blockadsexceptforsubs":false,
        "blockautoplay":true,
        "blockhfrformats":false,
        "blockwebmformats":false,
        "boostvolume":false,
        "cinemamode":false,
        "cinemamodewideplayer":true,
        "controlbar":{
            "active":true,
            "autohide":false,
            "centered":true,
            "position":"absolute"
        },
        "controls":[
            "size",
            "pop-up-player",
            "speed",
            "video-filters",
            "screenshot",
            "options"
        ],
        "controlsvisible":false,
        "controlspeed":true,
        "controlspeedmousebutton":false,
        "controlvolume":false,
        "controlvolumemousebutton":false,
        "convertshorts":false,
        "customcolors":{
            "--dimmer-text":"#cccccc",
            "--hover-background":"#232323",
            "--main-background":"#111111",
            "--main-color":"#00adee",
            "--main-text":"#eff0f1",
            "--second-background":"#181818",
            "--shadow":"#000000"
        },
        "customcssrules":"",
        "customscript":"",
        "customtheme":false,
        "darktheme":false,
        "date":1656518395915,
        "defaultvolume":false,
        "disableautoplay":false,
        "executescript":false,
        "expanddescription":false,
        "filter":"none",
        "hidecardsendscreens":false,
        "hidechat":false,
        "hidecomments":false,
        "hiderelated":false,
        "hideshorts":false,
        "ignoreplaylists":true,
        "ignorepopupplayer":true,
        "localecode":"pt_BR",
        "localedir":"ltr",
        "message":false,
        "miniplayer":false,
        "miniplayerposition":"_top-left",
        "miniplayersize":"_400x225",
        "newestcomments":false,
        "overridespeeds":true,
        "pauseforegroundtab":false,
        "pausevideos":false,
        "popuplayersize":"640x360",
        "qualityembeds":"medium",
        "qualityembedsfullscreen":"hd1080",
        "qualityplaylists":"hd720",
        "qualityplaylistsfullscreen":"hd1080",
        "qualityvideos":"hd1080",
        "qualityvideosfullscreen":"hd1080",
        "reload":false,
        "reversemousewheeldirection":false,
        "selectquality":true,
        "selectqualityfullscreenoff":false,
        "selectqualityfullscreenon":false,
        "speed":1,
        "speedvariation":0.1,
        "stopvideos":false,
        "theatermode":false,
        "theme":"default-dark",
        "themevariant":"youtube-deep-dark.css",
        "update":1665510345966,
        "volume":50,
        "volumemultiplier":3,
        "volumevariation":5,
        "whitelist":"",
        "wideplayer":false,
        "wideplayerviewport":false
      }
    }`

  return (
    <SyntaxHighlighter language="json" style={atelierCaveDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  )
}
