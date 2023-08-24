console.log('hello');
console.log(process.argv.length);
console.log(process.argv);
console.log(process.env);
console.log(process.env['OS']);
/*
  process 객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 다루는 객체
  - argv : 프로세스를 실행할 때 전달되는 파라미터 정보
  - env : 환경변수 정보 (사용자 정의 환경변수 뿐만아니라 os와 같은 시스템 환경 변수에도 접근 가능)
  - exit() : 프로세스를 끝내는 메소드 


*/
var calc = require('./calc');
console.log(calc.add(1, 5));

/*
  nconf : 시스템 환경변수에 접근할 수 있는 모듈
  npm install nconf 
  위 명령어로 설치 후 이용가능
  */

var nconf = require('nconf');
nconf.env();
console.log(nconf.get('OS'));

/*
  os모듈 : 시스템의 cpu나 메모리들의 용량등이 얼마나 남아있는지 체크 가능한 모듈
  - hostname() : 운영체제의 호스트 이름
  - totalmem() : 시스템 전체 메모리 용량
  - freemem() : 시스템에서 사용 가능한 메모리 용량
  - cpus() : cpu 정보
  - networkInterfaces() : 네트워크 인터페이스 정보를 담은 배열 객체 반환
*/

var os = require('os');
console.log(os.hostname());

/*
  path 모듈 : 파일패스를 다룰때 필요한 메서드 제공
  - join() : 여러개의 이름들을 모두 합쳐 하나의 파일 패스로 만듦
              파일 패스를 완성할때 구분자 등을 알아서 조정
  - dirname() : 파일패스에서 디렉터리 이름을 반환
  - basename() : 파일패스에서 파일의 확장자를 제외한 이름 반환
  - extname() : 파일패스에서 파일의 확장자 반환
*/
