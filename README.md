<p align="middle" >
  <img src="https://user-images.githubusercontent.com/80776262/146182043-18830d68-5bae-4fd7-a424-d35901fc50ed.png" width="330px" />
</p>
<br />

# Bongoose 👩‍👦‍👦
`Bongoose(봉구스)` 는 소셜 네트워크 서비스(SNS)를 제공하는 웹 애플리케이션 입니다.
<br />

> 개발 기간: 2021.09.13 ~ 2021.12.15 (총 3개월) <br />
> 개발 인원: 3명

[Bongoose 바로가기](https://codingjoa.kro.kr:48000/) <br />
[Bongoose 시연 영상 준비중..](https://github.com/17s-of-Tears/Bongoose-FE) <br />
[Bongoose-BE 리포지토리](https://github.com/codingjoa/Bongoose-BE) 

<br />

## Index 📖

1. 팀원 소개 및 포지션
1. 프로젝트 기술 스택
1. BackEnd 구조
1. ERD (ER 다이어그램)
1. 주요기능 미리보기
1. Lesson Learned
<br />

## 팀원 소개 및 포지션 👨‍💻

[오택현 🔍](https://github.com/codingjoa) | [여찬규 🔍](https://github.com/changyuyeo) | [고기현 🔍](https://github.com/Gihyun-developSpace)
:---: | :---: | :---:
<img src="https://avatars.githubusercontent.com/u/49907913?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/80776262?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/90171399?v=4" width="100px" />
Back-End | Front-End<br /> Design | Front-End

<br />

## 프로젝트 기술 스택 🛠

![사용기술](https://user-images.githubusercontent.com/80776262/146226591-073b8d87-941a-42b3-8ea0-8672669b737a.png)

<br />


## BackEnd 구조 📃

![iPhone 12, 12 Pro – 10](https://user-images.githubusercontent.com/80776262/146226681-36ea5744-bc34-4c30-9b55-44b0e8c2ade8.png)

<br />

## ERD (ER 다이어그램) 📝

![boongoose drawio_1](https://user-images.githubusercontent.com/80776262/146206285-0e34c642-b65f-4124-8f39-44b596d3c111.png)

<br />

## 주요기능 미리보기 🖥

<table>
  <tr>
    <td>미리보기</td>
    <td>설명</td>
  </tr>
  
  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146194480-98fd79d8-8328-4944-aac4-2e5458d7181d.gif width="600">
    </td>
    <td>
      <b>로그인 & 회원가입</b> <br />
      - 웹 페이지에 들어오면 제일 먼저 볼 수 있는 로그인 페이지 입니다. <br />
      - 봉구스는 회원이 인증된 사람만 이용할 수 있기 때문에 회원가입 후 로그인을 해야 서비스 이용이 가능합니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146194862-29e31454-b716-47b3-bb69-237105348713.gif width="600">
    </td>
    <td>
      <b>메인 페이지</b> <br />
      - 봉구스의 메인페이지 입니다. <br />
      - 최신 글을 빠르게 볼 수 있습니다. <br />
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146195809-937ef86e-dd3d-4083-bfb0-3141a78b54b9.gif width="600">
    </td>
    <td>
      <b>메인 페이지 (글 작성하기)</b> <br />
      - 글 작성 버튼을 클릭하면 작성할 수 있는 모달창이 보여지게 됩니다. <br />
      - 내용이 비어있거나 이미지가 4장이상이 될 경우 벨리데이션에 걸리게 됩니다. <br />
      - # 를 이용해서 해쉬태그를 작성할 수 있습니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146197287-e3e983d5-338a-4fa6-b413-efdf8a283eb4.gif width="600">
    </td>
    <td>
      <b>메인 페이지 (글 수정 & 삭제)</b> <br />
      - 자신이 작성한 글에는 수정 & 삭제하는 버튼이 나오게 됩니다. <br />
      - 글의 내용을 수정할 수 있으며, 원한다면 삭제도 가능합니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146196469-38ca6990-0e8c-4ded-a87a-02b0e32bd4fa.gif width="600">
    </td>
    <td>
      <b>댓글 기능</b> <br />
      - 각 게시물마다 댓글을 쓰고, 수정하고 삭제를 할 수 있습니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146196828-5baa3285-fd2f-4124-928a-34e0390ed6d7.gif width="600">
    </td>
    <td>
      <b>좋아요! & 싫어요! 기능</b> <br />
      - 각 게시물마다 좋아요와 싫어요를 할 수 있습니다. <br />
      - 다시 취소도 가능하지만, 좋아요와 싫어요는 동시에 사용 불가 합니다. 
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146198366-2902049c-6bc9-4370-a4ca-fa6597bba703.gif width="600">
    </td>
    <td>
      <b>마이페이지</b> <br />
      - 마이페이지에서는 자신의 정보를 볼 수 있습니다. <br />
      - 프로필 수정 버튼을 통해 자신의 프로필 이미지, 닉네임, 1줄 자기 소개를 수정할 수 있습니다. <br />
      - 최근 사진의 목록을 볼 수 있습니다. <br />
      - 자신이 작성한 글 목록을 볼 수 있습니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146198666-85432c53-d6a2-4a70-9e84-e56b6aa52cc2.gif width="600">
    </td>
    <td>
      <b>친구 목록 페이지</b> <br />
      - 현재 친구관계가 되어있는 유저들의 정보를 볼 수 있습니다. <br />
      - 해당 유저의 프로필 보기와 친구 삭제하기가 가능합니다. <br />
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146199170-82ff3f01-23cf-407a-a39d-1439b56cd9d3.gif width="600">
    </td>
    <td>
      <b>친구 찾기 페이지</b> <br />
      - 친구를 추가할 수 있는 유저들의 목록이 보여집니다. <br />
      - 원하는 유저에게 친구추가를 하면 친구가 됩니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146199756-6eb5caa2-8262-4c4d-afec-1e6fc438f5a3.gif width="600">
    </td>
    <td>
      <b>다른 유저 상세정보 페이지</b> <br />
      - 친구를 추가할 수 있는 유저들의 목록이 보여집니다. <br />
      - 원하는 유저에게 친구추가를 하면 친구가 됩니다.
    </td>
  </tr>

  <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/80776262/146200346-850358d3-d7aa-4a16-ab94-291a32e9b982.gif width="600">
    </td>
    <td>
      <b>게시물 검색기능</b> <br />
      - 해시태그 또는 유저닉네임으로 검색을 해서 검색결과를 볼 수 있습니다.
    </td>
  </tr>
</table>
<br />

## Lesson Learned ✏
이번 프로젝트를 하면서 많은 이슈를 경험했습니다. <br />
그중 제일 힘들었던 부분이 **JWT** 로그인 부분 이였는데 <br />
토큰의 유효기간이 끝나면 리플래쉬 토큰을 이용해 재발급을 받아야 했지만 <br />
리플래쉬 토큰은 쿠키로 공유가 되기 때문에 여러 번의 CORS를 겪었습니다.

첫 번째는 클라이언트에서 백엔드와 쿠키를 공유하기 위해 <br /> axios에 `withCredentials: true` 옵션을 줬음에도 쿠키가 공유가 안되는 문제 <br />
이 문제는 `Access-control-Allow-Origin: *`로 설정되어 있기 때문에 <br /> 백엔드 개발자에게 부탁을 해서 이 부분을 해결했습니다. <br />
하지만 이 문제점을 해결하고도 쿠키 공유가 되지 않았기 때문에 다른 문제점을 찾아볼 수밖에 없었는데요..

두 번째 문제인 **SameSite=Lax 가 기본값**이었기에 공유가 안된 문제였습니다. <br />
`SameSite`는 웹 애플리케이션에서 CSRF 공격을 방지하기 위해 HTTP 쿠키에서 설정할 수 있는 속성입니다. <br />
처음 마추친 문제에 많은 시간이 투자하여 공부하였고 문제를 해결해 보며  <br /> 쿠키에 대한 전체적인 흐름을 이해하는데 많은 도움이 된 것 같습니다.
<br />

---
<br />

### (추가) 좋은 UX를 위해 로딩 스피너, 스켈레톤 UI를 추가! 👀
![Hnet com-image (1)](https://user-images.githubusercontent.com/80776262/146219563-2b67dc42-1b9a-415b-9ea1-0827aaf09365.gif)

<br />

### (추가) 모바일 반응형 디자인! 👀
모바일 환경에서도 이용할 수 있도록 반응형 디자인을 제공합니다!

<table>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146205897-f9eb0919-b67a-4af9-a569-9299e40d381b.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146205991-0f48fae4-9dea-4ac5-bc66-af4706261908.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146205996-b772dbab-5fd9-483b-81b3-c51e65ca33fa.png">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146206012-06d60de9-5c82-4943-9212-0c2d10cdaa9f.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146206019-17ecd7fd-ea68-4744-92c4-7c8d906b39ee.png">
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/80776262/146206017-d5eb1858-f077-4bd0-ae64-8f658418a3c1.png">
    </td>
  </tr>
</table>