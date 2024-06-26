# Camera Chess Web

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Replace Chess eBoards with your phone camera using ChessCam (https://www.chesscam.net).

Features include:
* Broadcasting your game to Lichess.
* Playing a game on Lichess.
* Digitizing a chess game from a video / live stream.

Download the free app on [Google Play](https://play.google.com/store/apps/details?id=com.camerachess.www.twa).

## Demo
[<img src="https://raw.githubusercontent.com/wiki/Pbatch/CameraChessWeb/images/thumbnail.png" width="100%">](https://youtu.be/AAs4EX372bc)

## Roadmap

* Raise an alert when an illegal move is played (currently they're just ignored)
* Add sounds for the opponents moves in "/play"
* Add support for variants
* Develop a testing framework for different board + piece sets
* ... Your next big idea?

## Models 

Here are the models in ONNX format, post in the Issues if you want them in PyTorch format as well.
Once you've downloaded the models, you can view them in Netron (https://netron.app/). 

| Name | Description | Link |
| :---: | :---: | :---: |
| 480L_xcorners_480x288.onnx | YOLOv8 xcorner detector | https://drive.google.com/file/d/1-58WXTiXTupb7BJsO_ilwAN9j1XNTUTn/view?usp=sharing |
| 480S_pieces_step_3_480x288.onnx | Pruned YOLOv8 piece detector | https://drive.google.com/file/d/1K1Yqm3vYGcbIlI2gTIaY5EKPLpQ1dcU6/view?usp=sharing |
| 480S_pieces_480x288.onnx | YOLOv8 piece detector | https://drive.google.com/file/d/1-0ud7pAT2-oR9DxAimWCTJuQeCFnchPQ/view?usp=sharing |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ConorShepherd"><img src="https://avatars.githubusercontent.com/u/75845466?v=4?s=100" width="100px;" alt="Conor Shepherd"/><br /><sub><b>Conor Shepherd</b></sub></a><br /><a href="#research-ConorShepherd" title="Research">🔬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tdr24008"><img src="https://avatars.githubusercontent.com/u/109679977?v=4?s=100" width="100px;" alt="tdr24008"/><br /><sub><b>tdr24008</b></sub></a><br /><a href="#research-tdr24008" title="Research">🔬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DakshHandeCode"><img src="https://avatars.githubusercontent.com/u/153603746?v=4?s=100" width="100px;" alt="DakshHandeCode"/><br /><sub><b>DakshHandeCode</b></sub></a><br /><a href="#design-DakshHandeCode" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ChessScholar"><img src="https://avatars.githubusercontent.com/u/65353254?v=4?s=100" width="100px;" alt="ChessScholar"/><br /><sub><b>ChessScholar</b></sub></a><br /><a href="https://github.com/Pbatch/CameraChessWeb/issues?q=author%3AChessScholar" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JohnP-1"><img src="https://avatars.githubusercontent.com/u/55811674?v=4?s=100" width="100px;" alt="JohnP-1"/><br /><sub><b>JohnP-1</b></sub></a><br /><a href="https://github.com/Pbatch/CameraChessWeb/issues?q=author%3AJohnP-1" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AbdullahKhetran"><img src="https://avatars.githubusercontent.com/u/101284310?v=4?s=100" width="100px;" alt="Abdullah Khetran"/><br /><sub><b>Abdullah Khetran</b></sub></a><br /><a href="#research-AbdullahKhetran" title="Research">🔬</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
