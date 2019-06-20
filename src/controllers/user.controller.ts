import { Request, Response } from 'express';

class UserController {
  private static users = [
    {
      id: 'aab6a7ff-49ec-4a0a-87af-7a18eaff7581',
      name: 'Pierre',
    },
    {
      id: 'db6ebcf3-fbda-4413-a380-e7085f70ea71',
      name: 'Paul',
    },
    {
      id: 'a4547b54-8519-49d5-8c4d-103fcf3adf4e',
      name: 'Jacques',
    },
  ];

  public static listAll = async (req: Request, res: Response) => {
    return res.send(UserController.users);
  };
}

export default UserController;
