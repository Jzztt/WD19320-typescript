const CoreType2 = () => {
  // union type
  type HobbyType = string | number | boolean;
  const hobby: HobbyType = true;

  // enum type
  enum roleParams {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
  }
  const role: roleParams = roleParams.USER;

  // literal type
  type SizeType = "small" | "medium" | "large";
  const size: SizeType = "small";

  // null & undefined
  // null là khai báo giá trị null or chưa được khai báo và chưa được gán giá trị
  // undefined la khai báo giá trị undefined or được khia báo nhưng chưa gán trị
  console.log(typeof undefined);

  // khai báo = gia tri

  // unknown type: bắt buộc kiểm tra kiểu trước khi sử dụng
  const name: number[] = [1, 2, 3];
  const checkTypeName = (name: unknown) => {
    if (typeof name === "string") {
      return name;
    } else if (typeof name === "number") {
      return name;
    }
    return "unknown";
  };
  // TYPE ASSERTIONS
  const userInput: any = "hello";
  const userName = userInput as string;

  return (
    <>
      <div>{hobby}</div>
      <div>{role}</div>
      <div>{size}</div>
      <div>{checkTypeName(name)}</div>
    </>
  );
};

export default CoreType2;
