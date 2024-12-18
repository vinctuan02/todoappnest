// create-user.dto.ts
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly phone: string;
  readonly address: string;
  readonly image: string;
  readonly role?: string; // Optional
  readonly accountType?: string; // Optional
  readonly isActive?: boolean; // Optional
  readonly codeId?: string; // Optional
  readonly codeExpired?: Date; // Optional
}
