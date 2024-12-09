# API Documentation

### 회원가입 엔드포인트

회원가입 

#### Request

| URL          | Method |
|--------------|--------|
| `/users/signup` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 댓글 또는 답글 삭제

댓글 또는 답글 삭제

#### Request

| URL          | Method |
|--------------|--------|
| `/comments/{commentId}` | DELETE |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| commentId | string | 삭제할 댓글 또는 답글의 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 204 | 204 |

---

### 특정 상위 댓글의 답글 조회

특정 상위 댓글의 답글 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/comments/{parentId}/replies` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| parentId | string | 상위 댓글 ID | True |
| page | string | 페이지 번호 | True |
| size | string | 페이지 크기 | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 특정 댓글에 답글 추가

특정 댓글에 답글 추가

#### Request

| URL          | Method |
|--------------|--------|
| `/comments/{parentId}/replies` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| parentId | string | 답글을 추가할 상위 댓글의 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### Endpoint Description



#### Request

| URL          | Method |
|--------------|--------|
| `/hello` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| name | string | query parameter name | False |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### Endpoint Description



#### Request

| URL          | Method |
|--------------|--------|
| `/hello` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 전체 미디어 목록 조회, 미디어 태그/제목+내용 검색(페이징)

미디어 목록을 조회하며, 태그 또는 제목+내용에 대한 검색 결과를 반환한다. searchTags:true인 경우 태그 검색, 없거나 false인 경우 제목+내용 검색

#### Request

| URL          | Method |
|--------------|--------|
| `/media` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| page | string | 페이지 번호(0부터 시작) | False |
| size | string | 페이지 크기 | False |
| sort | string | 정렬 기준 (예: view,desc-조회수 내림차순) | False |
| searchTags | string | true: 태그 검색, false거나 설정 안 하면 제목/내용 검색 | False |
| keywords | string | 검색어(여러 개 가능), 설정 안 하면 전체 조회 | False |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 영상 게시글 생성

업로드된 영상을 공개해 게시글을 생성한다.

#### Request

| URL          | Method |
|--------------|--------|
| `/media` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 내가 업로드한 영상 목록 조회(페이징)

내가 업로드한 영상 목록 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/media/me` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| page | string | 페이지 번호(0부터 시작) | False |
| size | string | 페이지 크기 | False |
| sort | string | 정렬 기준 (예: view,desc-조회수 내림차순) | False |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 미디어 상세 조회

특정 미디어 상세 조회, 인증되지 않은 사용자나 playback history가 없는 경우 lastPlayedTime과 lastPlayedAt은 null로 반환됩니다.

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{id}` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| id | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 해당 미디어 ID의 댓글 목록 조회

해당 미디어 ID의 댓글 목록 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/comments` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 해당 미디어에 댓글 추가

해당 미디어에 댓글 추가

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/comments` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 댓글을 추가할 미디어 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 미디어 좋아요 개수 조회 API

미디어 좋아요 개수 조회 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/likes` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 미디어 좋아요 추가 API

미디어 좋아요 추가 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/likes` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 미디어 좋아요 삭제 API

미디어 좋아요 삭제 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/likes` | DELETE |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 204 | 204 |

---

### 미디어 정지점 목록 조회 API

미디어 정지점 목록 조회 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/stoppoints` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 정지점 생성 API

정지점 생성 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/stoppoints` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 정지점 삭제 API

정지점 삭제 API

#### Request

| URL          | Method |
|--------------|--------|
| `/media/{mediaId}/stoppoints/{stoppointId}` | DELETE |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
| stoppointId | string | 정지점 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 204 | 204 |

---

### 전체 재생 기록 조회

전체 재생 기록 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/playback/all` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### userId에 해당하는 전체 재생 기록 삭제

userId에 해당하는 전체 재생 기록 삭제

#### Request

| URL          | Method |
|--------------|--------|
| `/playback/all` | DELETE |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 재생 기록 저장 또는 갱신

재생 기록 저장 또는 갱신

#### Request

| URL          | Method |
|--------------|--------|
| `/playback/media/{mediaId}` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 재생 기록 삭제

재생 기록 삭제

#### Request

| URL          | Method |
|--------------|--------|
| `/playback/media/{mediaId}` | DELETE |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| mediaId | string | 미디어 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 204 | 204 |

---

### 사용자의 재생목록 조회

사용자의 재생목록 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 재생목록 생성

재생목록 생성

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 재생목록 삭제

재생목록 삭제

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists/{playlistId}` | DELETE |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| playlistId | string | 삭제할 재생목록의 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 204 | 204 |

---

### 재생목록의 동영상 조회

재생목록의 동영상 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists/{playlistId}/items` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| playlistId | string | 재생목록 ID | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 재생목록에 동영상 추가

재생목록에 동영상 추가

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists/{playlistId}/items` | POST |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| playlistId | string | 재생목록 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 201 | 201 |

---

### 재생목록의 동영상 순서 업데이트

재생목록의 동영상 순서 업데이트

#### Request

| URL          | Method |
|--------------|--------|
| `/playlists/{playlistId}/items/order` | PUT |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| playlistId | string | 재생목록 ID | True |
#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 태그 추천 API

태그 추천 API

#### Request

| URL          | Method |
|--------------|--------|
| `/tags/recommendation` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### Endpoint Description



#### Request

| URL          | Method |
|--------------|--------|
| `/testVideo` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### multipart/form-data image 필드에 썸네일 업로드 후, 썸네일 업로드된 url 반환

썸네일 이미지(jpg, 10mb 이하)을 업로드한 후, 업로드된 썸네일의 url을 반환한다.

#### Request

| URL          | Method |
|--------------|--------|
| `/upload/image` | POST |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 비디오 업로드를 위한 presigned url 생성

업로드할 파일 이름, 파일 크기(단위: byte, 5MB~1GB)를 입력 받아 그에 맞는 개수 및 형식의 presigned url을 반환한다.

#### Request

| URL          | Method |
|--------------|--------|
| `/upload/video` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### aws s3 비디오 multipart upload complete 호출

aws s3 multipart file upload completion 호출

#### Request

| URL          | Method |
|--------------|--------|
| `/upload/video/complete` | POST |

#### Request Body

| Field | Type | Description |
|-------|------|-------------|
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 사용자의 업로드 고유키 생성

사용자가 영상을 업로드할 수 있는 10분 동안 유효한 키를 생성

#### Request

| URL          | Method |
|--------------|--------|
| `/upload/video/generateKey` | POST |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 현재 사용자의 영상 업로드 현황 및 영상 처리 상태 확인

사용자가 업로드 후 아직 공개하지 않은 영상의 파일 이름(없으면 null) 및 처리 상태, 영상 정보 등등 반환

#### Request

| URL          | Method |
|--------------|--------|
| `/upload/video/isProcessed` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---

### 토큰 인증 확인 엔드포인트

jwt 토큰이 유효하면 200, 아니면 401 상태 코드 반환

#### Request

| URL          | Method |
|--------------|--------|
| `/users/auth` | GET |

#### Responses

| Status Code | Description |
|-------------|-------------|
| 401 | 401 |
| 200 | 200 |

---

### 현재 사용자가 작성한 댓글 조회

현재 사용자가 작성한 댓글 조회

#### Request

| URL          | Method |
|--------------|--------|
| `/users/comments` | GET |

#### Parameters

| Name | Type | Description | Required |
|------|------|-------------|----------|
| page | string | 페이지 번호 | True |
| size | string | 페이지 크기 | True |
#### Responses

| Status Code | Description |
|-------------|-------------|
| 200 | 200 |

---





