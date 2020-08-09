export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
}
