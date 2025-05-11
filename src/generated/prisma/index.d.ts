
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Social
 * 
 */
export type Social = $Result.DefaultSelection<Prisma.$SocialPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model WorkTasks
 * 
 */
export type WorkTasks = $Result.DefaultSelection<Prisma.$WorkTasksPayload>
/**
 * Model WorkBadge
 * 
 */
export type WorkBadge = $Result.DefaultSelection<Prisma.$WorkBadgePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectTech
 * 
 */
export type ProjectTech = $Result.DefaultSelection<Prisma.$ProjectTechPayload>
/**
 * Model ProjectLink
 * 
 */
export type ProjectLink = $Result.DefaultSelection<Prisma.$ProjectLinkPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model AiRefinement
 * 
 */
export type AiRefinement = $Result.DefaultSelection<Prisma.$AiRefinementPayload>
/**
 * Model OpenAiResponse
 * 
 */
export type OpenAiResponse = $Result.DefaultSelection<Prisma.$OpenAiResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.social`: Exposes CRUD operations for the **Social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.SocialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workTasks`: Exposes CRUD operations for the **WorkTasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkTasks
    * const workTasks = await prisma.workTasks.findMany()
    * ```
    */
  get workTasks(): Prisma.WorkTasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workBadge`: Exposes CRUD operations for the **WorkBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkBadges
    * const workBadges = await prisma.workBadge.findMany()
    * ```
    */
  get workBadge(): Prisma.WorkBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTech`: Exposes CRUD operations for the **ProjectTech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTeches
    * const projectTeches = await prisma.projectTech.findMany()
    * ```
    */
  get projectTech(): Prisma.ProjectTechDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectLink`: Exposes CRUD operations for the **ProjectLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLinks
    * const projectLinks = await prisma.projectLink.findMany()
    * ```
    */
  get projectLink(): Prisma.ProjectLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiRefinement`: Exposes CRUD operations for the **AiRefinement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiRefinements
    * const aiRefinements = await prisma.aiRefinement.findMany()
    * ```
    */
  get aiRefinement(): Prisma.AiRefinementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.openAiResponse`: Exposes CRUD operations for the **OpenAiResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpenAiResponses
    * const openAiResponses = await prisma.openAiResponse.findMany()
    * ```
    */
  get openAiResponse(): Prisma.OpenAiResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    Contact: 'Contact',
    Social: 'Social',
    Education: 'Education',
    Work: 'Work',
    WorkTasks: 'WorkTasks',
    WorkBadge: 'WorkBadge',
    Skill: 'Skill',
    Project: 'Project',
    ProjectTech: 'ProjectTech',
    ProjectLink: 'ProjectLink',
    JobApplication: 'JobApplication',
    AiRefinement: 'AiRefinement',
    OpenAiResponse: 'OpenAiResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "contact" | "social" | "education" | "work" | "workTasks" | "workBadge" | "skill" | "project" | "projectTech" | "projectLink" | "jobApplication" | "aiRefinement" | "openAiResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Social: {
        payload: Prisma.$SocialPayload<ExtArgs>
        fields: Prisma.SocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findFirst: {
            args: Prisma.SocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findMany: {
            args: Prisma.SocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          create: {
            args: Prisma.SocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          createMany: {
            args: Prisma.SocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          delete: {
            args: Prisma.SocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          update: {
            args: Prisma.SocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          deleteMany: {
            args: Prisma.SocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          upsert: {
            args: Prisma.SocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          aggregate: {
            args: Prisma.SocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial>
          }
          groupBy: {
            args: Prisma.SocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      WorkTasks: {
        payload: Prisma.$WorkTasksPayload<ExtArgs>
        fields: Prisma.WorkTasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkTasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkTasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          findFirst: {
            args: Prisma.WorkTasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkTasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          findMany: {
            args: Prisma.WorkTasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>[]
          }
          create: {
            args: Prisma.WorkTasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          createMany: {
            args: Prisma.WorkTasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkTasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>[]
          }
          delete: {
            args: Prisma.WorkTasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          update: {
            args: Prisma.WorkTasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          deleteMany: {
            args: Prisma.WorkTasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkTasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkTasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>[]
          }
          upsert: {
            args: Prisma.WorkTasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkTasksPayload>
          }
          aggregate: {
            args: Prisma.WorkTasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkTasks>
          }
          groupBy: {
            args: Prisma.WorkTasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkTasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkTasksCountArgs<ExtArgs>
            result: $Utils.Optional<WorkTasksCountAggregateOutputType> | number
          }
        }
      }
      WorkBadge: {
        payload: Prisma.$WorkBadgePayload<ExtArgs>
        fields: Prisma.WorkBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          findFirst: {
            args: Prisma.WorkBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          findMany: {
            args: Prisma.WorkBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>[]
          }
          create: {
            args: Prisma.WorkBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          createMany: {
            args: Prisma.WorkBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>[]
          }
          delete: {
            args: Prisma.WorkBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          update: {
            args: Prisma.WorkBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          deleteMany: {
            args: Prisma.WorkBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>[]
          }
          upsert: {
            args: Prisma.WorkBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkBadgePayload>
          }
          aggregate: {
            args: Prisma.WorkBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkBadge>
          }
          groupBy: {
            args: Prisma.WorkBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkBadgeCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectTech: {
        payload: Prisma.$ProjectTechPayload<ExtArgs>
        fields: Prisma.ProjectTechFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          findMany: {
            args: Prisma.ProjectTechFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          create: {
            args: Prisma.ProjectTechCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          createMany: {
            args: Prisma.ProjectTechCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTechCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          delete: {
            args: Prisma.ProjectTechDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          update: {
            args: Prisma.ProjectTechUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTechUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTechUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTech>
          }
          groupBy: {
            args: Prisma.ProjectTechGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechCountAggregateOutputType> | number
          }
        }
      }
      ProjectLink: {
        payload: Prisma.$ProjectLinkPayload<ExtArgs>
        fields: Prisma.ProjectLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          findFirst: {
            args: Prisma.ProjectLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          findMany: {
            args: Prisma.ProjectLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          create: {
            args: Prisma.ProjectLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          createMany: {
            args: Prisma.ProjectLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          delete: {
            args: Prisma.ProjectLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          update: {
            args: Prisma.ProjectLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          deleteMany: {
            args: Prisma.ProjectLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>[]
          }
          upsert: {
            args: Prisma.ProjectLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLinkPayload>
          }
          aggregate: {
            args: Prisma.ProjectLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectLink>
          }
          groupBy: {
            args: Prisma.ProjectLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectLinkCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      AiRefinement: {
        payload: Prisma.$AiRefinementPayload<ExtArgs>
        fields: Prisma.AiRefinementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiRefinementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiRefinementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          findFirst: {
            args: Prisma.AiRefinementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiRefinementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          findMany: {
            args: Prisma.AiRefinementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>[]
          }
          create: {
            args: Prisma.AiRefinementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          createMany: {
            args: Prisma.AiRefinementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiRefinementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>[]
          }
          delete: {
            args: Prisma.AiRefinementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          update: {
            args: Prisma.AiRefinementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          deleteMany: {
            args: Prisma.AiRefinementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiRefinementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiRefinementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>[]
          }
          upsert: {
            args: Prisma.AiRefinementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiRefinementPayload>
          }
          aggregate: {
            args: Prisma.AiRefinementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiRefinement>
          }
          groupBy: {
            args: Prisma.AiRefinementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiRefinementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiRefinementCountArgs<ExtArgs>
            result: $Utils.Optional<AiRefinementCountAggregateOutputType> | number
          }
        }
      }
      OpenAiResponse: {
        payload: Prisma.$OpenAiResponsePayload<ExtArgs>
        fields: Prisma.OpenAiResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpenAiResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpenAiResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          findFirst: {
            args: Prisma.OpenAiResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpenAiResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          findMany: {
            args: Prisma.OpenAiResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>[]
          }
          create: {
            args: Prisma.OpenAiResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          createMany: {
            args: Prisma.OpenAiResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpenAiResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>[]
          }
          delete: {
            args: Prisma.OpenAiResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          update: {
            args: Prisma.OpenAiResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          deleteMany: {
            args: Prisma.OpenAiResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpenAiResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpenAiResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>[]
          }
          upsert: {
            args: Prisma.OpenAiResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpenAiResponsePayload>
          }
          aggregate: {
            args: Prisma.OpenAiResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpenAiResponse>
          }
          groupBy: {
            args: Prisma.OpenAiResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpenAiResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpenAiResponseCountArgs<ExtArgs>
            result: $Utils.Optional<OpenAiResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    contact?: ContactOmit
    social?: SocialOmit
    education?: EducationOmit
    work?: WorkOmit
    workTasks?: WorkTasksOmit
    workBadge?: WorkBadgeOmit
    skill?: SkillOmit
    project?: ProjectOmit
    projectTech?: ProjectTechOmit
    projectLink?: ProjectLinkOmit
    jobApplication?: JobApplicationOmit
    aiRefinement?: AiRefinementOmit
    openAiResponse?: OpenAiResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resumes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | UserCountOutputTypeCountResumesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    education: number
    work: number
    skills: number
    projects: number
    jobApplications: number
    aiRefinements: number
    openAiResponses: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | ResumeCountOutputTypeCountEducationArgs
    work?: boolean | ResumeCountOutputTypeCountWorkArgs
    skills?: boolean | ResumeCountOutputTypeCountSkillsArgs
    projects?: boolean | ResumeCountOutputTypeCountProjectsArgs
    jobApplications?: boolean | ResumeCountOutputTypeCountJobApplicationsArgs
    aiRefinements?: boolean | ResumeCountOutputTypeCountAiRefinementsArgs
    openAiResponses?: boolean | ResumeCountOutputTypeCountOpenAiResponsesArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountWorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountAiRefinementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiRefinementWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountOpenAiResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpenAiResponseWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    social: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    social?: boolean | ContactCountOutputTypeCountSocialArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountSocialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    tasks: number
    badges: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | WorkCountOutputTypeCountTasksArgs
    badges?: boolean | WorkCountOutputTypeCountBadgesArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTasksWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkBadgeWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    techStack: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStack?: boolean | ProjectCountOutputTypeCountTechStackArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTechStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechWhereInput
  }


  /**
   * Count Type JobApplicationCountOutputType
   */

  export type JobApplicationCountOutputType = {
    aiRefinements: number
  }

  export type JobApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiRefinements?: boolean | JobApplicationCountOutputTypeCountAiRefinementsArgs
  }

  // Custom InputTypes
  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplicationCountOutputType
     */
    select?: JobApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobApplicationCountOutputType without action
   */
  export type JobApplicationCountOutputTypeCountAiRefinementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiRefinementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    aiCallsLimit: number | null
  }

  export type UserSumAggregateOutputType = {
    aiCallsLimit: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    aiCallsLimit: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    aiCallsLimit: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    aiCallsLimit: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    aiCallsLimit?: true
  }

  export type UserSumAggregateInputType = {
    aiCallsLimit?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    aiCallsLimit?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    aiCallsLimit?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    aiCallsLimit?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    aiCallsLimit: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCallsLimit?: boolean
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCallsLimit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCallsLimit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCallsLimit?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt" | "aiCallsLimit", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | User$resumesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resumes: Prisma.$ResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      aiCallsLimit: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends User$resumesArgs<ExtArgs> = {}>(args?: Subset<T, User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly aiCallsLimit: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resumes
   */
  export type User$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    initials: string | null
    location: string | null
    locationLink: string | null
    about: string | null
    summary: string | null
    avatarUrl: string | null
    personalWebsiteUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    title: string | null
    initials: string | null
    location: string | null
    locationLink: string | null
    about: string | null
    summary: string | null
    avatarUrl: string | null
    personalWebsiteUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    title: number
    initials: number
    location: number
    locationLink: number
    about: number
    summary: number
    avatarUrl: number
    personalWebsiteUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    initials?: true
    location?: true
    locationLink?: true
    about?: true
    summary?: true
    avatarUrl?: true
    personalWebsiteUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    initials?: true
    location?: true
    locationLink?: true
    about?: true
    summary?: true
    avatarUrl?: true
    personalWebsiteUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    title?: true
    initials?: true
    location?: true
    locationLink?: true
    about?: true
    summary?: true
    avatarUrl?: true
    personalWebsiteUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    title: string
    initials: string | null
    location: string | null
    locationLink: string | null
    about: string | null
    summary: string | null
    avatarUrl: string | null
    personalWebsiteUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    initials?: boolean
    location?: boolean
    locationLink?: boolean
    about?: boolean
    summary?: boolean
    avatarUrl?: boolean
    personalWebsiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Resume$userArgs<ExtArgs>
    contact?: boolean | Resume$contactArgs<ExtArgs>
    education?: boolean | Resume$educationArgs<ExtArgs>
    work?: boolean | Resume$workArgs<ExtArgs>
    skills?: boolean | Resume$skillsArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    jobApplications?: boolean | Resume$jobApplicationsArgs<ExtArgs>
    aiRefinements?: boolean | Resume$aiRefinementsArgs<ExtArgs>
    openAiResponses?: boolean | Resume$openAiResponsesArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    initials?: boolean
    location?: boolean
    locationLink?: boolean
    about?: boolean
    summary?: boolean
    avatarUrl?: boolean
    personalWebsiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Resume$userArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    initials?: boolean
    location?: boolean
    locationLink?: boolean
    about?: boolean
    summary?: boolean
    avatarUrl?: boolean
    personalWebsiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Resume$userArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    title?: boolean
    initials?: boolean
    location?: boolean
    locationLink?: boolean
    about?: boolean
    summary?: boolean
    avatarUrl?: boolean
    personalWebsiteUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "title" | "initials" | "location" | "locationLink" | "about" | "summary" | "avatarUrl" | "personalWebsiteUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resume$userArgs<ExtArgs>
    contact?: boolean | Resume$contactArgs<ExtArgs>
    education?: boolean | Resume$educationArgs<ExtArgs>
    work?: boolean | Resume$workArgs<ExtArgs>
    skills?: boolean | Resume$skillsArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    jobApplications?: boolean | Resume$jobApplicationsArgs<ExtArgs>
    aiRefinements?: boolean | Resume$aiRefinementsArgs<ExtArgs>
    openAiResponses?: boolean | Resume$openAiResponsesArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resume$userArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resume$userArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      contact: Prisma.$ContactPayload<ExtArgs> | null
      education: Prisma.$EducationPayload<ExtArgs>[]
      work: Prisma.$WorkPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      aiRefinements: Prisma.$AiRefinementPayload<ExtArgs>[]
      openAiResponses: Prisma.$OpenAiResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      title: string
      initials: string | null
      location: string | null
      locationLink: string | null
      about: string | null
      summary: string | null
      avatarUrl: string | null
      personalWebsiteUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Resume$userArgs<ExtArgs> = {}>(args?: Subset<T, Resume$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contact<T extends Resume$contactArgs<ExtArgs> = {}>(args?: Subset<T, Resume$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    education<T extends Resume$educationArgs<ExtArgs> = {}>(args?: Subset<T, Resume$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    work<T extends Resume$workArgs<ExtArgs> = {}>(args?: Subset<T, Resume$workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Resume$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Resume$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobApplications<T extends Resume$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiRefinements<T extends Resume$aiRefinementsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$aiRefinementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    openAiResponses<T extends Resume$openAiResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$openAiResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly name: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly initials: FieldRef<"Resume", 'String'>
    readonly location: FieldRef<"Resume", 'String'>
    readonly locationLink: FieldRef<"Resume", 'String'>
    readonly about: FieldRef<"Resume", 'String'>
    readonly summary: FieldRef<"Resume", 'String'>
    readonly avatarUrl: FieldRef<"Resume", 'String'>
    readonly personalWebsiteUrl: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.user
   */
  export type Resume$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Resume.contact
   */
  export type Resume$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Resume.education
   */
  export type Resume$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Resume.work
   */
  export type Resume$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Resume.skills
   */
  export type Resume$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Resume.projects
   */
  export type Resume$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Resume.jobApplications
   */
  export type Resume$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * Resume.aiRefinements
   */
  export type Resume$aiRefinementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    where?: AiRefinementWhereInput
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    cursor?: AiRefinementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiRefinementScalarFieldEnum | AiRefinementScalarFieldEnum[]
  }

  /**
   * Resume.openAiResponses
   */
  export type Resume$openAiResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    where?: OpenAiResponseWhereInput
    orderBy?: OpenAiResponseOrderByWithRelationInput | OpenAiResponseOrderByWithRelationInput[]
    cursor?: OpenAiResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpenAiResponseScalarFieldEnum | OpenAiResponseScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    email: string | null
    tel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    email: string | null
    tel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    resumeId: number
    email: number
    tel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    resumeId?: true
    email?: true
    tel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    resumeId?: true
    email?: true
    tel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    resumeId?: true
    email?: true
    tel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    resumeId: string
    email: string
    tel: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    email?: boolean
    tel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    social?: boolean | Contact$socialArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    email?: boolean
    tel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    email?: boolean
    tel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    resumeId?: boolean
    email?: boolean
    tel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "email" | "tel" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    social?: boolean | Contact$socialArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      social: Prisma.$SocialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      email: string
      tel: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    social<T extends Contact$socialArgs<ExtArgs> = {}>(args?: Subset<T, Contact$socialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly resumeId: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly tel: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.social
   */
  export type Contact$socialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    cursor?: SocialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Social
   */

  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    contactId: string | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    contactId: string | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    contactId: number
    name: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialMinAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social to aggregate.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }




  export type SocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithAggregationInput | SocialOrderByWithAggregationInput[]
    by: SocialScalarFieldEnum[] | SocialScalarFieldEnum
    having?: SocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }

  export type SocialGroupByOutputType = {
    id: string
    contactId: string
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: SocialCountAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends SocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialGroupByOutputType[P]>
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      >
    >


  export type SocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social"]>

  export type SocialSelectScalar = {
    id?: boolean
    contactId?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "name" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["social"]>
  export type SocialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type SocialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type SocialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $SocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Social"
    objects: {
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: string
      name: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["social"]>
    composites: {}
  }

  type SocialGetPayload<S extends boolean | null | undefined | SocialDefaultArgs> = $Result.GetResult<Prisma.$SocialPayload, S>

  type SocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCountAggregateInputType | true
    }

  export interface SocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Social'], meta: { name: 'Social' } }
    /**
     * Find zero or one Social that matches the filter.
     * @param {SocialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialFindUniqueArgs>(args: SelectSubset<T, SocialFindUniqueArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialFindUniqueOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialFindFirstArgs>(args?: SelectSubset<T, SocialFindFirstArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialFindManyArgs>(args?: SelectSubset<T, SocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social.
     * @param {SocialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
     */
    create<T extends SocialCreateArgs>(args: SelectSubset<T, SocialCreateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialCreateManyArgs>(args?: SelectSubset<T, SocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socials and returns the data saved in the database.
     * @param {SocialCreateManyAndReturnArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social.
     * @param {SocialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
     */
    delete<T extends SocialDeleteArgs>(args: SelectSubset<T, SocialDeleteArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social.
     * @param {SocialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUpdateArgs>(args: SelectSubset<T, SocialUpdateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialDeleteManyArgs>(args?: SelectSubset<T, SocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUpdateManyArgs>(args: SelectSubset<T, SocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials and returns the data updated in the database.
     * @param {SocialUpdateManyAndReturnArgs} args - Arguments to update many Socials.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social.
     * @param {SocialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
     */
    upsert<T extends SocialUpsertArgs>(args: SelectSubset<T, SocialUpsertArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialCountArgs>(
      args?: Subset<T, SocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): Prisma.PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialGroupByArgs['orderBy'] }
        : { orderBy?: SocialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Social model
   */
  readonly fields: SocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Social model
   */
  interface SocialFieldRefs {
    readonly id: FieldRef<"Social", 'String'>
    readonly contactId: FieldRef<"Social", 'String'>
    readonly name: FieldRef<"Social", 'String'>
    readonly url: FieldRef<"Social", 'String'>
    readonly createdAt: FieldRef<"Social", 'DateTime'>
    readonly updatedAt: FieldRef<"Social", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Social findUnique
   */
  export type SocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findUniqueOrThrow
   */
  export type SocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findFirst
   */
  export type SocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findFirstOrThrow
   */
  export type SocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findMany
   */
  export type SocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social create
   */
  export type SocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to create a Social.
     */
    data: XOR<SocialCreateInput, SocialUncheckedCreateInput>
  }

  /**
   * Social createMany
   */
  export type SocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
  }

  /**
   * Social createManyAndReturn
   */
  export type SocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Social update
   */
  export type SocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The data needed to update a Social.
     */
    data: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
    /**
     * Choose, which Social to update.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social updateMany
   */
  export type SocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social updateManyAndReturn
   */
  export type SocialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Social upsert
   */
  export type SocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * The filter to search for the Social to update in case it exists.
     */
    where: SocialWhereUniqueInput
    /**
     * In case the Social found by the `where` argument doesn't exist, create a new Social with this data.
     */
    create: XOR<SocialCreateInput, SocialUncheckedCreateInput>
    /**
     * In case the Social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
  }

  /**
   * Social delete
   */
  export type SocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
    /**
     * Filter which Social to delete.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social deleteMany
   */
  export type SocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Social without action
   */
  export type SocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    school: string | null
    degree: string | null
    start: string | null
    end: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    school: string | null
    degree: string | null
    start: string | null
    end: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    resumeId: number
    school: number
    degree: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    resumeId?: true
    school?: true
    degree?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    resumeId?: true
    school?: true
    degree?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    resumeId?: true
    school?: true
    degree?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    resumeId: string
    school: string
    degree: string
    start: string
    end: string
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    school?: boolean
    degree?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    school?: boolean
    degree?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    school?: boolean
    degree?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    resumeId?: boolean
    school?: boolean
    degree?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "school" | "degree" | "start" | "end" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      school: string
      degree: string
      start: string
      end: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly resumeId: FieldRef<"Education", 'String'>
    readonly school: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly start: FieldRef<"Education", 'String'>
    readonly end: FieldRef<"Education", 'String'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    company: string | null
    link: string | null
    title: string | null
    start: string | null
    end: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    company: string | null
    link: string | null
    title: string | null
    start: string | null
    end: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    resumeId: number
    company: number
    link: number
    title: number
    start: number
    end: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkMinAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    link?: true
    title?: true
    start?: true
    end?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    link?: true
    title?: true
    start?: true
    end?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    link?: true
    title?: true
    start?: true
    end?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    resumeId: string
    company: string
    link: string | null
    title: string
    start: string
    end: string | null
    description: string
    createdAt: Date
    updatedAt: Date
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    link?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    tasks?: boolean | Work$tasksArgs<ExtArgs>
    badges?: boolean | Work$badgesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    link?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    link?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    resumeId?: boolean
    company?: boolean
    link?: boolean
    title?: boolean
    start?: boolean
    end?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "company" | "link" | "title" | "start" | "end" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    tasks?: boolean | Work$tasksArgs<ExtArgs>
    badges?: boolean | Work$badgesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      tasks: Prisma.$WorkTasksPayload<ExtArgs>[]
      badges: Prisma.$WorkBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      company: string
      link: string | null
      title: string
      start: string
      end: string | null
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Work$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Work$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends Work$badgesArgs<ExtArgs> = {}>(args?: Subset<T, Work$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly resumeId: FieldRef<"Work", 'String'>
    readonly company: FieldRef<"Work", 'String'>
    readonly link: FieldRef<"Work", 'String'>
    readonly title: FieldRef<"Work", 'String'>
    readonly start: FieldRef<"Work", 'String'>
    readonly end: FieldRef<"Work", 'String'>
    readonly description: FieldRef<"Work", 'String'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
    readonly updatedAt: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.tasks
   */
  export type Work$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    where?: WorkTasksWhereInput
    orderBy?: WorkTasksOrderByWithRelationInput | WorkTasksOrderByWithRelationInput[]
    cursor?: WorkTasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkTasksScalarFieldEnum | WorkTasksScalarFieldEnum[]
  }

  /**
   * Work.badges
   */
  export type Work$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    where?: WorkBadgeWhereInput
    orderBy?: WorkBadgeOrderByWithRelationInput | WorkBadgeOrderByWithRelationInput[]
    cursor?: WorkBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkBadgeScalarFieldEnum | WorkBadgeScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model WorkTasks
   */

  export type AggregateWorkTasks = {
    _count: WorkTasksCountAggregateOutputType | null
    _min: WorkTasksMinAggregateOutputType | null
    _max: WorkTasksMaxAggregateOutputType | null
  }

  export type WorkTasksMinAggregateOutputType = {
    id: string | null
    workId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkTasksMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkTasksCountAggregateOutputType = {
    id: number
    workId: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkTasksMinAggregateInputType = {
    id?: true
    workId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkTasksMaxAggregateInputType = {
    id?: true
    workId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkTasksCountAggregateInputType = {
    id?: true
    workId?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkTasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTasks to aggregate.
     */
    where?: WorkTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTasksOrderByWithRelationInput | WorkTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkTasks
    **/
    _count?: true | WorkTasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkTasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkTasksMaxAggregateInputType
  }

  export type GetWorkTasksAggregateType<T extends WorkTasksAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkTasks[P]>
      : GetScalarType<T[P], AggregateWorkTasks[P]>
  }




  export type WorkTasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkTasksWhereInput
    orderBy?: WorkTasksOrderByWithAggregationInput | WorkTasksOrderByWithAggregationInput[]
    by: WorkTasksScalarFieldEnum[] | WorkTasksScalarFieldEnum
    having?: WorkTasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkTasksCountAggregateInputType | true
    _min?: WorkTasksMinAggregateInputType
    _max?: WorkTasksMaxAggregateInputType
  }

  export type WorkTasksGroupByOutputType = {
    id: string
    workId: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: WorkTasksCountAggregateOutputType | null
    _min: WorkTasksMinAggregateOutputType | null
    _max: WorkTasksMaxAggregateOutputType | null
  }

  type GetWorkTasksGroupByPayload<T extends WorkTasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkTasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkTasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkTasksGroupByOutputType[P]>
            : GetScalarType<T[P], WorkTasksGroupByOutputType[P]>
        }
      >
    >


  export type WorkTasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTasks"]>

  export type WorkTasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTasks"]>

  export type WorkTasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workTasks"]>

  export type WorkTasksSelectScalar = {
    id?: boolean
    workId?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkTasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["workTasks"]>
  export type WorkTasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkTasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkTasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkTasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkTasks"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workTasks"]>
    composites: {}
  }

  type WorkTasksGetPayload<S extends boolean | null | undefined | WorkTasksDefaultArgs> = $Result.GetResult<Prisma.$WorkTasksPayload, S>

  type WorkTasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkTasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkTasksCountAggregateInputType | true
    }

  export interface WorkTasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkTasks'], meta: { name: 'WorkTasks' } }
    /**
     * Find zero or one WorkTasks that matches the filter.
     * @param {WorkTasksFindUniqueArgs} args - Arguments to find a WorkTasks
     * @example
     * // Get one WorkTasks
     * const workTasks = await prisma.workTasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkTasksFindUniqueArgs>(args: SelectSubset<T, WorkTasksFindUniqueArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkTasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkTasksFindUniqueOrThrowArgs} args - Arguments to find a WorkTasks
     * @example
     * // Get one WorkTasks
     * const workTasks = await prisma.workTasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkTasksFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkTasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksFindFirstArgs} args - Arguments to find a WorkTasks
     * @example
     * // Get one WorkTasks
     * const workTasks = await prisma.workTasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkTasksFindFirstArgs>(args?: SelectSubset<T, WorkTasksFindFirstArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkTasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksFindFirstOrThrowArgs} args - Arguments to find a WorkTasks
     * @example
     * // Get one WorkTasks
     * const workTasks = await prisma.workTasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkTasksFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkTasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkTasks
     * const workTasks = await prisma.workTasks.findMany()
     * 
     * // Get first 10 WorkTasks
     * const workTasks = await prisma.workTasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workTasksWithIdOnly = await prisma.workTasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkTasksFindManyArgs>(args?: SelectSubset<T, WorkTasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkTasks.
     * @param {WorkTasksCreateArgs} args - Arguments to create a WorkTasks.
     * @example
     * // Create one WorkTasks
     * const WorkTasks = await prisma.workTasks.create({
     *   data: {
     *     // ... data to create a WorkTasks
     *   }
     * })
     * 
     */
    create<T extends WorkTasksCreateArgs>(args: SelectSubset<T, WorkTasksCreateArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkTasks.
     * @param {WorkTasksCreateManyArgs} args - Arguments to create many WorkTasks.
     * @example
     * // Create many WorkTasks
     * const workTasks = await prisma.workTasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkTasksCreateManyArgs>(args?: SelectSubset<T, WorkTasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkTasks and returns the data saved in the database.
     * @param {WorkTasksCreateManyAndReturnArgs} args - Arguments to create many WorkTasks.
     * @example
     * // Create many WorkTasks
     * const workTasks = await prisma.workTasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkTasks and only return the `id`
     * const workTasksWithIdOnly = await prisma.workTasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkTasksCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkTasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkTasks.
     * @param {WorkTasksDeleteArgs} args - Arguments to delete one WorkTasks.
     * @example
     * // Delete one WorkTasks
     * const WorkTasks = await prisma.workTasks.delete({
     *   where: {
     *     // ... filter to delete one WorkTasks
     *   }
     * })
     * 
     */
    delete<T extends WorkTasksDeleteArgs>(args: SelectSubset<T, WorkTasksDeleteArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkTasks.
     * @param {WorkTasksUpdateArgs} args - Arguments to update one WorkTasks.
     * @example
     * // Update one WorkTasks
     * const workTasks = await prisma.workTasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkTasksUpdateArgs>(args: SelectSubset<T, WorkTasksUpdateArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkTasks.
     * @param {WorkTasksDeleteManyArgs} args - Arguments to filter WorkTasks to delete.
     * @example
     * // Delete a few WorkTasks
     * const { count } = await prisma.workTasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkTasksDeleteManyArgs>(args?: SelectSubset<T, WorkTasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkTasks
     * const workTasks = await prisma.workTasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkTasksUpdateManyArgs>(args: SelectSubset<T, WorkTasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkTasks and returns the data updated in the database.
     * @param {WorkTasksUpdateManyAndReturnArgs} args - Arguments to update many WorkTasks.
     * @example
     * // Update many WorkTasks
     * const workTasks = await prisma.workTasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkTasks and only return the `id`
     * const workTasksWithIdOnly = await prisma.workTasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkTasksUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkTasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkTasks.
     * @param {WorkTasksUpsertArgs} args - Arguments to update or create a WorkTasks.
     * @example
     * // Update or create a WorkTasks
     * const workTasks = await prisma.workTasks.upsert({
     *   create: {
     *     // ... data to create a WorkTasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkTasks we want to update
     *   }
     * })
     */
    upsert<T extends WorkTasksUpsertArgs>(args: SelectSubset<T, WorkTasksUpsertArgs<ExtArgs>>): Prisma__WorkTasksClient<$Result.GetResult<Prisma.$WorkTasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksCountArgs} args - Arguments to filter WorkTasks to count.
     * @example
     * // Count the number of WorkTasks
     * const count = await prisma.workTasks.count({
     *   where: {
     *     // ... the filter for the WorkTasks we want to count
     *   }
     * })
    **/
    count<T extends WorkTasksCountArgs>(
      args?: Subset<T, WorkTasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkTasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkTasksAggregateArgs>(args: Subset<T, WorkTasksAggregateArgs>): Prisma.PrismaPromise<GetWorkTasksAggregateType<T>>

    /**
     * Group by WorkTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkTasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkTasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkTasksGroupByArgs['orderBy'] }
        : { orderBy?: WorkTasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkTasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkTasks model
   */
  readonly fields: WorkTasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkTasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkTasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkTasks model
   */
  interface WorkTasksFieldRefs {
    readonly id: FieldRef<"WorkTasks", 'String'>
    readonly workId: FieldRef<"WorkTasks", 'String'>
    readonly description: FieldRef<"WorkTasks", 'String'>
    readonly createdAt: FieldRef<"WorkTasks", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkTasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkTasks findUnique
   */
  export type WorkTasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where: WorkTasksWhereUniqueInput
  }

  /**
   * WorkTasks findUniqueOrThrow
   */
  export type WorkTasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where: WorkTasksWhereUniqueInput
  }

  /**
   * WorkTasks findFirst
   */
  export type WorkTasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where?: WorkTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTasksOrderByWithRelationInput | WorkTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTasks.
     */
    cursor?: WorkTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTasks.
     */
    distinct?: WorkTasksScalarFieldEnum | WorkTasksScalarFieldEnum[]
  }

  /**
   * WorkTasks findFirstOrThrow
   */
  export type WorkTasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where?: WorkTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTasksOrderByWithRelationInput | WorkTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkTasks.
     */
    cursor?: WorkTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkTasks.
     */
    distinct?: WorkTasksScalarFieldEnum | WorkTasksScalarFieldEnum[]
  }

  /**
   * WorkTasks findMany
   */
  export type WorkTasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter, which WorkTasks to fetch.
     */
    where?: WorkTasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkTasks to fetch.
     */
    orderBy?: WorkTasksOrderByWithRelationInput | WorkTasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkTasks.
     */
    cursor?: WorkTasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkTasks.
     */
    skip?: number
    distinct?: WorkTasksScalarFieldEnum | WorkTasksScalarFieldEnum[]
  }

  /**
   * WorkTasks create
   */
  export type WorkTasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkTasks.
     */
    data: XOR<WorkTasksCreateInput, WorkTasksUncheckedCreateInput>
  }

  /**
   * WorkTasks createMany
   */
  export type WorkTasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkTasks.
     */
    data: WorkTasksCreateManyInput | WorkTasksCreateManyInput[]
  }

  /**
   * WorkTasks createManyAndReturn
   */
  export type WorkTasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * The data used to create many WorkTasks.
     */
    data: WorkTasksCreateManyInput | WorkTasksCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkTasks update
   */
  export type WorkTasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkTasks.
     */
    data: XOR<WorkTasksUpdateInput, WorkTasksUncheckedUpdateInput>
    /**
     * Choose, which WorkTasks to update.
     */
    where: WorkTasksWhereUniqueInput
  }

  /**
   * WorkTasks updateMany
   */
  export type WorkTasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkTasks.
     */
    data: XOR<WorkTasksUpdateManyMutationInput, WorkTasksUncheckedUpdateManyInput>
    /**
     * Filter which WorkTasks to update
     */
    where?: WorkTasksWhereInput
    /**
     * Limit how many WorkTasks to update.
     */
    limit?: number
  }

  /**
   * WorkTasks updateManyAndReturn
   */
  export type WorkTasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * The data used to update WorkTasks.
     */
    data: XOR<WorkTasksUpdateManyMutationInput, WorkTasksUncheckedUpdateManyInput>
    /**
     * Filter which WorkTasks to update
     */
    where?: WorkTasksWhereInput
    /**
     * Limit how many WorkTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkTasks upsert
   */
  export type WorkTasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkTasks to update in case it exists.
     */
    where: WorkTasksWhereUniqueInput
    /**
     * In case the WorkTasks found by the `where` argument doesn't exist, create a new WorkTasks with this data.
     */
    create: XOR<WorkTasksCreateInput, WorkTasksUncheckedCreateInput>
    /**
     * In case the WorkTasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkTasksUpdateInput, WorkTasksUncheckedUpdateInput>
  }

  /**
   * WorkTasks delete
   */
  export type WorkTasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
    /**
     * Filter which WorkTasks to delete.
     */
    where: WorkTasksWhereUniqueInput
  }

  /**
   * WorkTasks deleteMany
   */
  export type WorkTasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkTasks to delete
     */
    where?: WorkTasksWhereInput
    /**
     * Limit how many WorkTasks to delete.
     */
    limit?: number
  }

  /**
   * WorkTasks without action
   */
  export type WorkTasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkTasks
     */
    select?: WorkTasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkTasks
     */
    omit?: WorkTasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkTasksInclude<ExtArgs> | null
  }


  /**
   * Model WorkBadge
   */

  export type AggregateWorkBadge = {
    _count: WorkBadgeCountAggregateOutputType | null
    _min: WorkBadgeMinAggregateOutputType | null
    _max: WorkBadgeMaxAggregateOutputType | null
  }

  export type WorkBadgeMinAggregateOutputType = {
    id: string | null
    workId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkBadgeMaxAggregateOutputType = {
    id: string | null
    workId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkBadgeCountAggregateOutputType = {
    id: number
    workId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkBadgeMinAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkBadgeMaxAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkBadgeCountAggregateInputType = {
    id?: true
    workId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkBadge to aggregate.
     */
    where?: WorkBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkBadges to fetch.
     */
    orderBy?: WorkBadgeOrderByWithRelationInput | WorkBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkBadges
    **/
    _count?: true | WorkBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkBadgeMaxAggregateInputType
  }

  export type GetWorkBadgeAggregateType<T extends WorkBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkBadge[P]>
      : GetScalarType<T[P], AggregateWorkBadge[P]>
  }




  export type WorkBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkBadgeWhereInput
    orderBy?: WorkBadgeOrderByWithAggregationInput | WorkBadgeOrderByWithAggregationInput[]
    by: WorkBadgeScalarFieldEnum[] | WorkBadgeScalarFieldEnum
    having?: WorkBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkBadgeCountAggregateInputType | true
    _min?: WorkBadgeMinAggregateInputType
    _max?: WorkBadgeMaxAggregateInputType
  }

  export type WorkBadgeGroupByOutputType = {
    id: string
    workId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: WorkBadgeCountAggregateOutputType | null
    _min: WorkBadgeMinAggregateOutputType | null
    _max: WorkBadgeMaxAggregateOutputType | null
  }

  type GetWorkBadgeGroupByPayload<T extends WorkBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkBadgeGroupByOutputType[P]>
        }
      >
    >


  export type WorkBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workBadge"]>

  export type WorkBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workBadge"]>

  export type WorkBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workBadge"]>

  export type WorkBadgeSelectScalar = {
    id?: boolean
    workId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["workBadge"]>
  export type WorkBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }
  export type WorkBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
  }

  export type $WorkBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkBadge"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workBadge"]>
    composites: {}
  }

  type WorkBadgeGetPayload<S extends boolean | null | undefined | WorkBadgeDefaultArgs> = $Result.GetResult<Prisma.$WorkBadgePayload, S>

  type WorkBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkBadgeCountAggregateInputType | true
    }

  export interface WorkBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkBadge'], meta: { name: 'WorkBadge' } }
    /**
     * Find zero or one WorkBadge that matches the filter.
     * @param {WorkBadgeFindUniqueArgs} args - Arguments to find a WorkBadge
     * @example
     * // Get one WorkBadge
     * const workBadge = await prisma.workBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkBadgeFindUniqueArgs>(args: SelectSubset<T, WorkBadgeFindUniqueArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkBadgeFindUniqueOrThrowArgs} args - Arguments to find a WorkBadge
     * @example
     * // Get one WorkBadge
     * const workBadge = await prisma.workBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeFindFirstArgs} args - Arguments to find a WorkBadge
     * @example
     * // Get one WorkBadge
     * const workBadge = await prisma.workBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkBadgeFindFirstArgs>(args?: SelectSubset<T, WorkBadgeFindFirstArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeFindFirstOrThrowArgs} args - Arguments to find a WorkBadge
     * @example
     * // Get one WorkBadge
     * const workBadge = await prisma.workBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkBadges
     * const workBadges = await prisma.workBadge.findMany()
     * 
     * // Get first 10 WorkBadges
     * const workBadges = await prisma.workBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workBadgeWithIdOnly = await prisma.workBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkBadgeFindManyArgs>(args?: SelectSubset<T, WorkBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkBadge.
     * @param {WorkBadgeCreateArgs} args - Arguments to create a WorkBadge.
     * @example
     * // Create one WorkBadge
     * const WorkBadge = await prisma.workBadge.create({
     *   data: {
     *     // ... data to create a WorkBadge
     *   }
     * })
     * 
     */
    create<T extends WorkBadgeCreateArgs>(args: SelectSubset<T, WorkBadgeCreateArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkBadges.
     * @param {WorkBadgeCreateManyArgs} args - Arguments to create many WorkBadges.
     * @example
     * // Create many WorkBadges
     * const workBadge = await prisma.workBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkBadgeCreateManyArgs>(args?: SelectSubset<T, WorkBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkBadges and returns the data saved in the database.
     * @param {WorkBadgeCreateManyAndReturnArgs} args - Arguments to create many WorkBadges.
     * @example
     * // Create many WorkBadges
     * const workBadge = await prisma.workBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkBadges and only return the `id`
     * const workBadgeWithIdOnly = await prisma.workBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkBadge.
     * @param {WorkBadgeDeleteArgs} args - Arguments to delete one WorkBadge.
     * @example
     * // Delete one WorkBadge
     * const WorkBadge = await prisma.workBadge.delete({
     *   where: {
     *     // ... filter to delete one WorkBadge
     *   }
     * })
     * 
     */
    delete<T extends WorkBadgeDeleteArgs>(args: SelectSubset<T, WorkBadgeDeleteArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkBadge.
     * @param {WorkBadgeUpdateArgs} args - Arguments to update one WorkBadge.
     * @example
     * // Update one WorkBadge
     * const workBadge = await prisma.workBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkBadgeUpdateArgs>(args: SelectSubset<T, WorkBadgeUpdateArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkBadges.
     * @param {WorkBadgeDeleteManyArgs} args - Arguments to filter WorkBadges to delete.
     * @example
     * // Delete a few WorkBadges
     * const { count } = await prisma.workBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkBadgeDeleteManyArgs>(args?: SelectSubset<T, WorkBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkBadges
     * const workBadge = await prisma.workBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkBadgeUpdateManyArgs>(args: SelectSubset<T, WorkBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkBadges and returns the data updated in the database.
     * @param {WorkBadgeUpdateManyAndReturnArgs} args - Arguments to update many WorkBadges.
     * @example
     * // Update many WorkBadges
     * const workBadge = await prisma.workBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkBadges and only return the `id`
     * const workBadgeWithIdOnly = await prisma.workBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkBadge.
     * @param {WorkBadgeUpsertArgs} args - Arguments to update or create a WorkBadge.
     * @example
     * // Update or create a WorkBadge
     * const workBadge = await prisma.workBadge.upsert({
     *   create: {
     *     // ... data to create a WorkBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkBadge we want to update
     *   }
     * })
     */
    upsert<T extends WorkBadgeUpsertArgs>(args: SelectSubset<T, WorkBadgeUpsertArgs<ExtArgs>>): Prisma__WorkBadgeClient<$Result.GetResult<Prisma.$WorkBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeCountArgs} args - Arguments to filter WorkBadges to count.
     * @example
     * // Count the number of WorkBadges
     * const count = await prisma.workBadge.count({
     *   where: {
     *     // ... the filter for the WorkBadges we want to count
     *   }
     * })
    **/
    count<T extends WorkBadgeCountArgs>(
      args?: Subset<T, WorkBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkBadgeAggregateArgs>(args: Subset<T, WorkBadgeAggregateArgs>): Prisma.PrismaPromise<GetWorkBadgeAggregateType<T>>

    /**
     * Group by WorkBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkBadgeGroupByArgs['orderBy'] }
        : { orderBy?: WorkBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkBadge model
   */
  readonly fields: WorkBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkBadge model
   */
  interface WorkBadgeFieldRefs {
    readonly id: FieldRef<"WorkBadge", 'String'>
    readonly workId: FieldRef<"WorkBadge", 'String'>
    readonly name: FieldRef<"WorkBadge", 'String'>
    readonly createdAt: FieldRef<"WorkBadge", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkBadge findUnique
   */
  export type WorkBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkBadge to fetch.
     */
    where: WorkBadgeWhereUniqueInput
  }

  /**
   * WorkBadge findUniqueOrThrow
   */
  export type WorkBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkBadge to fetch.
     */
    where: WorkBadgeWhereUniqueInput
  }

  /**
   * WorkBadge findFirst
   */
  export type WorkBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkBadge to fetch.
     */
    where?: WorkBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkBadges to fetch.
     */
    orderBy?: WorkBadgeOrderByWithRelationInput | WorkBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkBadges.
     */
    cursor?: WorkBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkBadges.
     */
    distinct?: WorkBadgeScalarFieldEnum | WorkBadgeScalarFieldEnum[]
  }

  /**
   * WorkBadge findFirstOrThrow
   */
  export type WorkBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkBadge to fetch.
     */
    where?: WorkBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkBadges to fetch.
     */
    orderBy?: WorkBadgeOrderByWithRelationInput | WorkBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkBadges.
     */
    cursor?: WorkBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkBadges.
     */
    distinct?: WorkBadgeScalarFieldEnum | WorkBadgeScalarFieldEnum[]
  }

  /**
   * WorkBadge findMany
   */
  export type WorkBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkBadges to fetch.
     */
    where?: WorkBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkBadges to fetch.
     */
    orderBy?: WorkBadgeOrderByWithRelationInput | WorkBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkBadges.
     */
    cursor?: WorkBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkBadges.
     */
    skip?: number
    distinct?: WorkBadgeScalarFieldEnum | WorkBadgeScalarFieldEnum[]
  }

  /**
   * WorkBadge create
   */
  export type WorkBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkBadge.
     */
    data: XOR<WorkBadgeCreateInput, WorkBadgeUncheckedCreateInput>
  }

  /**
   * WorkBadge createMany
   */
  export type WorkBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkBadges.
     */
    data: WorkBadgeCreateManyInput | WorkBadgeCreateManyInput[]
  }

  /**
   * WorkBadge createManyAndReturn
   */
  export type WorkBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkBadges.
     */
    data: WorkBadgeCreateManyInput | WorkBadgeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkBadge update
   */
  export type WorkBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkBadge.
     */
    data: XOR<WorkBadgeUpdateInput, WorkBadgeUncheckedUpdateInput>
    /**
     * Choose, which WorkBadge to update.
     */
    where: WorkBadgeWhereUniqueInput
  }

  /**
   * WorkBadge updateMany
   */
  export type WorkBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkBadges.
     */
    data: XOR<WorkBadgeUpdateManyMutationInput, WorkBadgeUncheckedUpdateManyInput>
    /**
     * Filter which WorkBadges to update
     */
    where?: WorkBadgeWhereInput
    /**
     * Limit how many WorkBadges to update.
     */
    limit?: number
  }

  /**
   * WorkBadge updateManyAndReturn
   */
  export type WorkBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * The data used to update WorkBadges.
     */
    data: XOR<WorkBadgeUpdateManyMutationInput, WorkBadgeUncheckedUpdateManyInput>
    /**
     * Filter which WorkBadges to update
     */
    where?: WorkBadgeWhereInput
    /**
     * Limit how many WorkBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkBadge upsert
   */
  export type WorkBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkBadge to update in case it exists.
     */
    where: WorkBadgeWhereUniqueInput
    /**
     * In case the WorkBadge found by the `where` argument doesn't exist, create a new WorkBadge with this data.
     */
    create: XOR<WorkBadgeCreateInput, WorkBadgeUncheckedCreateInput>
    /**
     * In case the WorkBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkBadgeUpdateInput, WorkBadgeUncheckedUpdateInput>
  }

  /**
   * WorkBadge delete
   */
  export type WorkBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
    /**
     * Filter which WorkBadge to delete.
     */
    where: WorkBadgeWhereUniqueInput
  }

  /**
   * WorkBadge deleteMany
   */
  export type WorkBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkBadges to delete
     */
    where?: WorkBadgeWhereInput
    /**
     * Limit how many WorkBadges to delete.
     */
    limit?: number
  }

  /**
   * WorkBadge without action
   */
  export type WorkBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkBadge
     */
    select?: WorkBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkBadge
     */
    omit?: WorkBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    resumeId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    resumeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    resumeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    resumeId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    resumeId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    resumeId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly resumeId: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    resumeId: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    resumeId?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    resumeId: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    techStack?: boolean | Project$techStackArgs<ExtArgs>
    link?: boolean | Project$linkArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    resumeId?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    techStack?: boolean | Project$techStackArgs<ExtArgs>
    link?: boolean | Project$linkArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      techStack: Prisma.$ProjectTechPayload<ExtArgs>[]
      link: Prisma.$ProjectLinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    techStack<T extends Project$techStackArgs<ExtArgs> = {}>(args?: Subset<T, Project$techStackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    link<T extends Project$linkArgs<ExtArgs> = {}>(args?: Subset<T, Project$linkArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly resumeId: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.techStack
   */
  export type Project$techStackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    where?: ProjectTechWhereInput
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    cursor?: ProjectTechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * Project.link
   */
  export type Project$linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    where?: ProjectLinkWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTech
   */

  export type AggregateProjectTech = {
    _count: ProjectTechCountAggregateOutputType | null
    _min: ProjectTechMinAggregateOutputType | null
    _max: ProjectTechMaxAggregateOutputType | null
  }

  export type ProjectTechMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTechMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTechCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectTechMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTechMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTechCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectTechAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTech to aggregate.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTeches
    **/
    _count?: true | ProjectTechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTechMaxAggregateInputType
  }

  export type GetProjectTechAggregateType<T extends ProjectTechAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTech[P]>
      : GetScalarType<T[P], AggregateProjectTech[P]>
  }




  export type ProjectTechGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTechWhereInput
    orderBy?: ProjectTechOrderByWithAggregationInput | ProjectTechOrderByWithAggregationInput[]
    by: ProjectTechScalarFieldEnum[] | ProjectTechScalarFieldEnum
    having?: ProjectTechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechCountAggregateInputType | true
    _min?: ProjectTechMinAggregateInputType
    _max?: ProjectTechMaxAggregateInputType
  }

  export type ProjectTechGroupByOutputType = {
    id: string
    projectId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectTechCountAggregateOutputType | null
    _min: ProjectTechMinAggregateOutputType | null
    _max: ProjectTechMaxAggregateOutputType | null
  }

  type GetProjectTechGroupByPayload<T extends ProjectTechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTechSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTech"]>

  export type ProjectTechSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectTechOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["projectTech"]>
  export type ProjectTechInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectTechIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectTechPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTech"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectTech"]>
    composites: {}
  }

  type ProjectTechGetPayload<S extends boolean | null | undefined | ProjectTechDefaultArgs> = $Result.GetResult<Prisma.$ProjectTechPayload, S>

  type ProjectTechCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTechFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTechCountAggregateInputType | true
    }

  export interface ProjectTechDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTech'], meta: { name: 'ProjectTech' } }
    /**
     * Find zero or one ProjectTech that matches the filter.
     * @param {ProjectTechFindUniqueArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechFindUniqueArgs>(args: SelectSubset<T, ProjectTechFindUniqueArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTech that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechFindUniqueOrThrowArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTechFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindFirstArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechFindFirstArgs>(args?: SelectSubset<T, ProjectTechFindFirstArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTech that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindFirstOrThrowArgs} args - Arguments to find a ProjectTech
     * @example
     * // Get one ProjectTech
     * const projectTech = await prisma.projectTech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTechFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTeches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTeches
     * const projectTeches = await prisma.projectTech.findMany()
     * 
     * // Get first 10 ProjectTeches
     * const projectTeches = await prisma.projectTech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTechFindManyArgs>(args?: SelectSubset<T, ProjectTechFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTech.
     * @param {ProjectTechCreateArgs} args - Arguments to create a ProjectTech.
     * @example
     * // Create one ProjectTech
     * const ProjectTech = await prisma.projectTech.create({
     *   data: {
     *     // ... data to create a ProjectTech
     *   }
     * })
     * 
     */
    create<T extends ProjectTechCreateArgs>(args: SelectSubset<T, ProjectTechCreateArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTeches.
     * @param {ProjectTechCreateManyArgs} args - Arguments to create many ProjectTeches.
     * @example
     * // Create many ProjectTeches
     * const projectTech = await prisma.projectTech.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTechCreateManyArgs>(args?: SelectSubset<T, ProjectTechCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTeches and returns the data saved in the database.
     * @param {ProjectTechCreateManyAndReturnArgs} args - Arguments to create many ProjectTeches.
     * @example
     * // Create many ProjectTeches
     * const projectTech = await prisma.projectTech.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTeches and only return the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTechCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTechCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTech.
     * @param {ProjectTechDeleteArgs} args - Arguments to delete one ProjectTech.
     * @example
     * // Delete one ProjectTech
     * const ProjectTech = await prisma.projectTech.delete({
     *   where: {
     *     // ... filter to delete one ProjectTech
     *   }
     * })
     * 
     */
    delete<T extends ProjectTechDeleteArgs>(args: SelectSubset<T, ProjectTechDeleteArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTech.
     * @param {ProjectTechUpdateArgs} args - Arguments to update one ProjectTech.
     * @example
     * // Update one ProjectTech
     * const projectTech = await prisma.projectTech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTechUpdateArgs>(args: SelectSubset<T, ProjectTechUpdateArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTeches.
     * @param {ProjectTechDeleteManyArgs} args - Arguments to filter ProjectTeches to delete.
     * @example
     * // Delete a few ProjectTeches
     * const { count } = await prisma.projectTech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTechDeleteManyArgs>(args?: SelectSubset<T, ProjectTechDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTeches
     * const projectTech = await prisma.projectTech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTechUpdateManyArgs>(args: SelectSubset<T, ProjectTechUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeches and returns the data updated in the database.
     * @param {ProjectTechUpdateManyAndReturnArgs} args - Arguments to update many ProjectTeches.
     * @example
     * // Update many ProjectTeches
     * const projectTech = await prisma.projectTech.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTeches and only return the `id`
     * const projectTechWithIdOnly = await prisma.projectTech.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectTechUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTechUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTech.
     * @param {ProjectTechUpsertArgs} args - Arguments to update or create a ProjectTech.
     * @example
     * // Update or create a ProjectTech
     * const projectTech = await prisma.projectTech.upsert({
     *   create: {
     *     // ... data to create a ProjectTech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTech we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechUpsertArgs>(args: SelectSubset<T, ProjectTechUpsertArgs<ExtArgs>>): Prisma__ProjectTechClient<$Result.GetResult<Prisma.$ProjectTechPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTeches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechCountArgs} args - Arguments to filter ProjectTeches to count.
     * @example
     * // Count the number of ProjectTeches
     * const count = await prisma.projectTech.count({
     *   where: {
     *     // ... the filter for the ProjectTeches we want to count
     *   }
     * })
    **/
    count<T extends ProjectTechCountArgs>(
      args?: Subset<T, ProjectTechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTechAggregateArgs>(args: Subset<T, ProjectTechAggregateArgs>): Prisma.PrismaPromise<GetProjectTechAggregateType<T>>

    /**
     * Group by ProjectTech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTech model
   */
  readonly fields: ProjectTechFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTech model
   */
  interface ProjectTechFieldRefs {
    readonly id: FieldRef<"ProjectTech", 'String'>
    readonly projectId: FieldRef<"ProjectTech", 'String'>
    readonly name: FieldRef<"ProjectTech", 'String'>
    readonly createdAt: FieldRef<"ProjectTech", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectTech", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTech findUnique
   */
  export type ProjectTechFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech findUniqueOrThrow
   */
  export type ProjectTechFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech findFirst
   */
  export type ProjectTechFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeches.
     */
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech findFirstOrThrow
   */
  export type ProjectTechFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTech to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeches.
     */
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech findMany
   */
  export type ProjectTechFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeches to fetch.
     */
    where?: ProjectTechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeches to fetch.
     */
    orderBy?: ProjectTechOrderByWithRelationInput | ProjectTechOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTeches.
     */
    cursor?: ProjectTechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeches.
     */
    skip?: number
    distinct?: ProjectTechScalarFieldEnum | ProjectTechScalarFieldEnum[]
  }

  /**
   * ProjectTech create
   */
  export type ProjectTechCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTech.
     */
    data: XOR<ProjectTechCreateInput, ProjectTechUncheckedCreateInput>
  }

  /**
   * ProjectTech createMany
   */
  export type ProjectTechCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTeches.
     */
    data: ProjectTechCreateManyInput | ProjectTechCreateManyInput[]
  }

  /**
   * ProjectTech createManyAndReturn
   */
  export type ProjectTechCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTeches.
     */
    data: ProjectTechCreateManyInput | ProjectTechCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTech update
   */
  export type ProjectTechUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTech.
     */
    data: XOR<ProjectTechUpdateInput, ProjectTechUncheckedUpdateInput>
    /**
     * Choose, which ProjectTech to update.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech updateMany
   */
  export type ProjectTechUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTeches.
     */
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeches to update
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to update.
     */
    limit?: number
  }

  /**
   * ProjectTech updateManyAndReturn
   */
  export type ProjectTechUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTeches.
     */
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeches to update
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTech upsert
   */
  export type ProjectTechUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTech to update in case it exists.
     */
    where: ProjectTechWhereUniqueInput
    /**
     * In case the ProjectTech found by the `where` argument doesn't exist, create a new ProjectTech with this data.
     */
    create: XOR<ProjectTechCreateInput, ProjectTechUncheckedCreateInput>
    /**
     * In case the ProjectTech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechUpdateInput, ProjectTechUncheckedUpdateInput>
  }

  /**
   * ProjectTech delete
   */
  export type ProjectTechDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
    /**
     * Filter which ProjectTech to delete.
     */
    where: ProjectTechWhereUniqueInput
  }

  /**
   * ProjectTech deleteMany
   */
  export type ProjectTechDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTeches to delete
     */
    where?: ProjectTechWhereInput
    /**
     * Limit how many ProjectTeches to delete.
     */
    limit?: number
  }

  /**
   * ProjectTech without action
   */
  export type ProjectTechDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTech
     */
    select?: ProjectTechSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTech
     */
    omit?: ProjectTechOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechInclude<ExtArgs> | null
  }


  /**
   * Model ProjectLink
   */

  export type AggregateProjectLink = {
    _count: ProjectLinkCountAggregateOutputType | null
    _min: ProjectLinkMinAggregateOutputType | null
    _max: ProjectLinkMaxAggregateOutputType | null
  }

  export type ProjectLinkMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    label: string | null
    href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectLinkMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    label: string | null
    href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectLinkCountAggregateOutputType = {
    id: number
    projectId: number
    label: number
    href: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectLinkMinAggregateInputType = {
    id?: true
    projectId?: true
    label?: true
    href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectLinkMaxAggregateInputType = {
    id?: true
    projectId?: true
    label?: true
    href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectLinkCountAggregateInputType = {
    id?: true
    projectId?: true
    label?: true
    href?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLink to aggregate.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectLinks
    **/
    _count?: true | ProjectLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectLinkMaxAggregateInputType
  }

  export type GetProjectLinkAggregateType<T extends ProjectLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectLink[P]>
      : GetScalarType<T[P], AggregateProjectLink[P]>
  }




  export type ProjectLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectLinkWhereInput
    orderBy?: ProjectLinkOrderByWithAggregationInput | ProjectLinkOrderByWithAggregationInput[]
    by: ProjectLinkScalarFieldEnum[] | ProjectLinkScalarFieldEnum
    having?: ProjectLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectLinkCountAggregateInputType | true
    _min?: ProjectLinkMinAggregateInputType
    _max?: ProjectLinkMaxAggregateInputType
  }

  export type ProjectLinkGroupByOutputType = {
    id: string
    projectId: string
    label: string
    href: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectLinkCountAggregateOutputType | null
    _min: ProjectLinkMinAggregateOutputType | null
    _max: ProjectLinkMaxAggregateOutputType | null
  }

  type GetProjectLinkGroupByPayload<T extends ProjectLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectLinkGroupByOutputType[P]>
        }
      >
    >


  export type ProjectLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    label?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    label?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    label?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectLink"]>

  export type ProjectLinkSelectScalar = {
    id?: boolean
    projectId?: boolean
    label?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "label" | "href" | "createdAt" | "updatedAt", ExtArgs["result"]["projectLink"]>
  export type ProjectLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectLink"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      label: string
      href: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectLink"]>
    composites: {}
  }

  type ProjectLinkGetPayload<S extends boolean | null | undefined | ProjectLinkDefaultArgs> = $Result.GetResult<Prisma.$ProjectLinkPayload, S>

  type ProjectLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectLinkCountAggregateInputType | true
    }

  export interface ProjectLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectLink'], meta: { name: 'ProjectLink' } }
    /**
     * Find zero or one ProjectLink that matches the filter.
     * @param {ProjectLinkFindUniqueArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectLinkFindUniqueArgs>(args: SelectSubset<T, ProjectLinkFindUniqueArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectLinkFindUniqueOrThrowArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindFirstArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectLinkFindFirstArgs>(args?: SelectSubset<T, ProjectLinkFindFirstArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindFirstOrThrowArgs} args - Arguments to find a ProjectLink
     * @example
     * // Get one ProjectLink
     * const projectLink = await prisma.projectLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLinks
     * const projectLinks = await prisma.projectLink.findMany()
     * 
     * // Get first 10 ProjectLinks
     * const projectLinks = await prisma.projectLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectLinkFindManyArgs>(args?: SelectSubset<T, ProjectLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectLink.
     * @param {ProjectLinkCreateArgs} args - Arguments to create a ProjectLink.
     * @example
     * // Create one ProjectLink
     * const ProjectLink = await prisma.projectLink.create({
     *   data: {
     *     // ... data to create a ProjectLink
     *   }
     * })
     * 
     */
    create<T extends ProjectLinkCreateArgs>(args: SelectSubset<T, ProjectLinkCreateArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLinks.
     * @param {ProjectLinkCreateManyArgs} args - Arguments to create many ProjectLinks.
     * @example
     * // Create many ProjectLinks
     * const projectLink = await prisma.projectLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectLinkCreateManyArgs>(args?: SelectSubset<T, ProjectLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectLinks and returns the data saved in the database.
     * @param {ProjectLinkCreateManyAndReturnArgs} args - Arguments to create many ProjectLinks.
     * @example
     * // Create many ProjectLinks
     * const projectLink = await prisma.projectLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectLinks and only return the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectLink.
     * @param {ProjectLinkDeleteArgs} args - Arguments to delete one ProjectLink.
     * @example
     * // Delete one ProjectLink
     * const ProjectLink = await prisma.projectLink.delete({
     *   where: {
     *     // ... filter to delete one ProjectLink
     *   }
     * })
     * 
     */
    delete<T extends ProjectLinkDeleteArgs>(args: SelectSubset<T, ProjectLinkDeleteArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectLink.
     * @param {ProjectLinkUpdateArgs} args - Arguments to update one ProjectLink.
     * @example
     * // Update one ProjectLink
     * const projectLink = await prisma.projectLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectLinkUpdateArgs>(args: SelectSubset<T, ProjectLinkUpdateArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLinks.
     * @param {ProjectLinkDeleteManyArgs} args - Arguments to filter ProjectLinks to delete.
     * @example
     * // Delete a few ProjectLinks
     * const { count } = await prisma.projectLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectLinkDeleteManyArgs>(args?: SelectSubset<T, ProjectLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLinks
     * const projectLink = await prisma.projectLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectLinkUpdateManyArgs>(args: SelectSubset<T, ProjectLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLinks and returns the data updated in the database.
     * @param {ProjectLinkUpdateManyAndReturnArgs} args - Arguments to update many ProjectLinks.
     * @example
     * // Update many ProjectLinks
     * const projectLink = await prisma.projectLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectLinks and only return the `id`
     * const projectLinkWithIdOnly = await prisma.projectLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectLink.
     * @param {ProjectLinkUpsertArgs} args - Arguments to update or create a ProjectLink.
     * @example
     * // Update or create a ProjectLink
     * const projectLink = await prisma.projectLink.upsert({
     *   create: {
     *     // ... data to create a ProjectLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectLink we want to update
     *   }
     * })
     */
    upsert<T extends ProjectLinkUpsertArgs>(args: SelectSubset<T, ProjectLinkUpsertArgs<ExtArgs>>): Prisma__ProjectLinkClient<$Result.GetResult<Prisma.$ProjectLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkCountArgs} args - Arguments to filter ProjectLinks to count.
     * @example
     * // Count the number of ProjectLinks
     * const count = await prisma.projectLink.count({
     *   where: {
     *     // ... the filter for the ProjectLinks we want to count
     *   }
     * })
    **/
    count<T extends ProjectLinkCountArgs>(
      args?: Subset<T, ProjectLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectLinkAggregateArgs>(args: Subset<T, ProjectLinkAggregateArgs>): Prisma.PrismaPromise<GetProjectLinkAggregateType<T>>

    /**
     * Group by ProjectLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectLinkGroupByArgs['orderBy'] }
        : { orderBy?: ProjectLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectLink model
   */
  readonly fields: ProjectLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectLink model
   */
  interface ProjectLinkFieldRefs {
    readonly id: FieldRef<"ProjectLink", 'String'>
    readonly projectId: FieldRef<"ProjectLink", 'String'>
    readonly label: FieldRef<"ProjectLink", 'String'>
    readonly href: FieldRef<"ProjectLink", 'String'>
    readonly createdAt: FieldRef<"ProjectLink", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectLink findUnique
   */
  export type ProjectLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink findUniqueOrThrow
   */
  export type ProjectLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink findFirst
   */
  export type ProjectLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLinks.
     */
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink findFirstOrThrow
   */
  export type ProjectLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLink to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLinks.
     */
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink findMany
   */
  export type ProjectLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLinks to fetch.
     */
    where?: ProjectLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLinks to fetch.
     */
    orderBy?: ProjectLinkOrderByWithRelationInput | ProjectLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectLinks.
     */
    cursor?: ProjectLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLinks.
     */
    skip?: number
    distinct?: ProjectLinkScalarFieldEnum | ProjectLinkScalarFieldEnum[]
  }

  /**
   * ProjectLink create
   */
  export type ProjectLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectLink.
     */
    data: XOR<ProjectLinkCreateInput, ProjectLinkUncheckedCreateInput>
  }

  /**
   * ProjectLink createMany
   */
  export type ProjectLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectLinks.
     */
    data: ProjectLinkCreateManyInput | ProjectLinkCreateManyInput[]
  }

  /**
   * ProjectLink createManyAndReturn
   */
  export type ProjectLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectLinks.
     */
    data: ProjectLinkCreateManyInput | ProjectLinkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLink update
   */
  export type ProjectLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectLink.
     */
    data: XOR<ProjectLinkUpdateInput, ProjectLinkUncheckedUpdateInput>
    /**
     * Choose, which ProjectLink to update.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink updateMany
   */
  export type ProjectLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectLinks.
     */
    data: XOR<ProjectLinkUpdateManyMutationInput, ProjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLinks to update
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to update.
     */
    limit?: number
  }

  /**
   * ProjectLink updateManyAndReturn
   */
  export type ProjectLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * The data used to update ProjectLinks.
     */
    data: XOR<ProjectLinkUpdateManyMutationInput, ProjectLinkUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLinks to update
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectLink upsert
   */
  export type ProjectLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectLink to update in case it exists.
     */
    where: ProjectLinkWhereUniqueInput
    /**
     * In case the ProjectLink found by the `where` argument doesn't exist, create a new ProjectLink with this data.
     */
    create: XOR<ProjectLinkCreateInput, ProjectLinkUncheckedCreateInput>
    /**
     * In case the ProjectLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectLinkUpdateInput, ProjectLinkUncheckedUpdateInput>
  }

  /**
   * ProjectLink delete
   */
  export type ProjectLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
    /**
     * Filter which ProjectLink to delete.
     */
    where: ProjectLinkWhereUniqueInput
  }

  /**
   * ProjectLink deleteMany
   */
  export type ProjectLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLinks to delete
     */
    where?: ProjectLinkWhereInput
    /**
     * Limit how many ProjectLinks to delete.
     */
    limit?: number
  }

  /**
   * ProjectLink without action
   */
  export type ProjectLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectLink
     */
    select?: ProjectLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLink
     */
    omit?: ProjectLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLinkInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    company: string | null
    position: string | null
    status: string | null
    appliedDate: Date | null
    jobUrl: string | null
    jobDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    company: string | null
    position: string | null
    status: string | null
    appliedDate: Date | null
    jobUrl: string | null
    jobDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    resumeId: number
    company: number
    position: number
    status: number
    appliedDate: number
    jobUrl: number
    jobDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    position?: true
    status?: true
    appliedDate?: true
    jobUrl?: true
    jobDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    position?: true
    status?: true
    appliedDate?: true
    jobUrl?: true
    jobDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    resumeId?: true
    company?: true
    position?: true
    status?: true
    appliedDate?: true
    jobUrl?: true
    jobDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    resumeId: string
    company: string
    position: string
    status: string
    appliedDate: Date
    jobUrl: string | null
    jobDescription: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    position?: boolean
    status?: boolean
    appliedDate?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    aiRefinements?: boolean | JobApplication$aiRefinementsArgs<ExtArgs>
    _count?: boolean | JobApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    position?: boolean
    status?: boolean
    appliedDate?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    company?: boolean
    position?: boolean
    status?: boolean
    appliedDate?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    resumeId?: boolean
    company?: boolean
    position?: boolean
    status?: boolean
    appliedDate?: boolean
    jobUrl?: boolean
    jobDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "company" | "position" | "status" | "appliedDate" | "jobUrl" | "jobDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    aiRefinements?: boolean | JobApplication$aiRefinementsArgs<ExtArgs>
    _count?: boolean | JobApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type JobApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      aiRefinements: Prisma.$AiRefinementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      company: string
      position: string
      status: string
      appliedDate: Date
      jobUrl: string | null
      jobDescription: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aiRefinements<T extends JobApplication$aiRefinementsArgs<ExtArgs> = {}>(args?: Subset<T, JobApplication$aiRefinementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly resumeId: FieldRef<"JobApplication", 'String'>
    readonly company: FieldRef<"JobApplication", 'String'>
    readonly position: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'String'>
    readonly appliedDate: FieldRef<"JobApplication", 'DateTime'>
    readonly jobUrl: FieldRef<"JobApplication", 'String'>
    readonly jobDescription: FieldRef<"JobApplication", 'String'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication.aiRefinements
   */
  export type JobApplication$aiRefinementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    where?: AiRefinementWhereInput
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    cursor?: AiRefinementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiRefinementScalarFieldEnum | AiRefinementScalarFieldEnum[]
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Model AiRefinement
   */

  export type AggregateAiRefinement = {
    _count: AiRefinementCountAggregateOutputType | null
    _min: AiRefinementMinAggregateOutputType | null
    _max: AiRefinementMaxAggregateOutputType | null
  }

  export type AiRefinementMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    jobApplicationId: string | null
    refinements: string | null
    createdAt: Date | null
  }

  export type AiRefinementMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    jobApplicationId: string | null
    refinements: string | null
    createdAt: Date | null
  }

  export type AiRefinementCountAggregateOutputType = {
    id: number
    resumeId: number
    jobApplicationId: number
    refinements: number
    createdAt: number
    _all: number
  }


  export type AiRefinementMinAggregateInputType = {
    id?: true
    resumeId?: true
    jobApplicationId?: true
    refinements?: true
    createdAt?: true
  }

  export type AiRefinementMaxAggregateInputType = {
    id?: true
    resumeId?: true
    jobApplicationId?: true
    refinements?: true
    createdAt?: true
  }

  export type AiRefinementCountAggregateInputType = {
    id?: true
    resumeId?: true
    jobApplicationId?: true
    refinements?: true
    createdAt?: true
    _all?: true
  }

  export type AiRefinementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiRefinement to aggregate.
     */
    where?: AiRefinementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRefinements to fetch.
     */
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiRefinementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRefinements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRefinements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiRefinements
    **/
    _count?: true | AiRefinementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiRefinementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiRefinementMaxAggregateInputType
  }

  export type GetAiRefinementAggregateType<T extends AiRefinementAggregateArgs> = {
        [P in keyof T & keyof AggregateAiRefinement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiRefinement[P]>
      : GetScalarType<T[P], AggregateAiRefinement[P]>
  }




  export type AiRefinementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiRefinementWhereInput
    orderBy?: AiRefinementOrderByWithAggregationInput | AiRefinementOrderByWithAggregationInput[]
    by: AiRefinementScalarFieldEnum[] | AiRefinementScalarFieldEnum
    having?: AiRefinementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiRefinementCountAggregateInputType | true
    _min?: AiRefinementMinAggregateInputType
    _max?: AiRefinementMaxAggregateInputType
  }

  export type AiRefinementGroupByOutputType = {
    id: string
    resumeId: string
    jobApplicationId: string
    refinements: string
    createdAt: Date
    _count: AiRefinementCountAggregateOutputType | null
    _min: AiRefinementMinAggregateOutputType | null
    _max: AiRefinementMaxAggregateOutputType | null
  }

  type GetAiRefinementGroupByPayload<T extends AiRefinementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiRefinementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiRefinementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiRefinementGroupByOutputType[P]>
            : GetScalarType<T[P], AiRefinementGroupByOutputType[P]>
        }
      >
    >


  export type AiRefinementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    jobApplicationId?: boolean
    refinements?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRefinement"]>

  export type AiRefinementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    jobApplicationId?: boolean
    refinements?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRefinement"]>

  export type AiRefinementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    jobApplicationId?: boolean
    refinements?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiRefinement"]>

  export type AiRefinementSelectScalar = {
    id?: boolean
    resumeId?: boolean
    jobApplicationId?: boolean
    refinements?: boolean
    createdAt?: boolean
  }

  export type AiRefinementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "jobApplicationId" | "refinements" | "createdAt", ExtArgs["result"]["aiRefinement"]>
  export type AiRefinementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AiRefinementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }
  export type AiRefinementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
    jobApplication?: boolean | JobApplicationDefaultArgs<ExtArgs>
  }

  export type $AiRefinementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiRefinement"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
      jobApplication: Prisma.$JobApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      jobApplicationId: string
      refinements: string
      createdAt: Date
    }, ExtArgs["result"]["aiRefinement"]>
    composites: {}
  }

  type AiRefinementGetPayload<S extends boolean | null | undefined | AiRefinementDefaultArgs> = $Result.GetResult<Prisma.$AiRefinementPayload, S>

  type AiRefinementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiRefinementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiRefinementCountAggregateInputType | true
    }

  export interface AiRefinementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiRefinement'], meta: { name: 'AiRefinement' } }
    /**
     * Find zero or one AiRefinement that matches the filter.
     * @param {AiRefinementFindUniqueArgs} args - Arguments to find a AiRefinement
     * @example
     * // Get one AiRefinement
     * const aiRefinement = await prisma.aiRefinement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiRefinementFindUniqueArgs>(args: SelectSubset<T, AiRefinementFindUniqueArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiRefinement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiRefinementFindUniqueOrThrowArgs} args - Arguments to find a AiRefinement
     * @example
     * // Get one AiRefinement
     * const aiRefinement = await prisma.aiRefinement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiRefinementFindUniqueOrThrowArgs>(args: SelectSubset<T, AiRefinementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiRefinement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementFindFirstArgs} args - Arguments to find a AiRefinement
     * @example
     * // Get one AiRefinement
     * const aiRefinement = await prisma.aiRefinement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiRefinementFindFirstArgs>(args?: SelectSubset<T, AiRefinementFindFirstArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiRefinement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementFindFirstOrThrowArgs} args - Arguments to find a AiRefinement
     * @example
     * // Get one AiRefinement
     * const aiRefinement = await prisma.aiRefinement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiRefinementFindFirstOrThrowArgs>(args?: SelectSubset<T, AiRefinementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiRefinements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiRefinements
     * const aiRefinements = await prisma.aiRefinement.findMany()
     * 
     * // Get first 10 AiRefinements
     * const aiRefinements = await prisma.aiRefinement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiRefinementWithIdOnly = await prisma.aiRefinement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiRefinementFindManyArgs>(args?: SelectSubset<T, AiRefinementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiRefinement.
     * @param {AiRefinementCreateArgs} args - Arguments to create a AiRefinement.
     * @example
     * // Create one AiRefinement
     * const AiRefinement = await prisma.aiRefinement.create({
     *   data: {
     *     // ... data to create a AiRefinement
     *   }
     * })
     * 
     */
    create<T extends AiRefinementCreateArgs>(args: SelectSubset<T, AiRefinementCreateArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiRefinements.
     * @param {AiRefinementCreateManyArgs} args - Arguments to create many AiRefinements.
     * @example
     * // Create many AiRefinements
     * const aiRefinement = await prisma.aiRefinement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiRefinementCreateManyArgs>(args?: SelectSubset<T, AiRefinementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiRefinements and returns the data saved in the database.
     * @param {AiRefinementCreateManyAndReturnArgs} args - Arguments to create many AiRefinements.
     * @example
     * // Create many AiRefinements
     * const aiRefinement = await prisma.aiRefinement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiRefinements and only return the `id`
     * const aiRefinementWithIdOnly = await prisma.aiRefinement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiRefinementCreateManyAndReturnArgs>(args?: SelectSubset<T, AiRefinementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiRefinement.
     * @param {AiRefinementDeleteArgs} args - Arguments to delete one AiRefinement.
     * @example
     * // Delete one AiRefinement
     * const AiRefinement = await prisma.aiRefinement.delete({
     *   where: {
     *     // ... filter to delete one AiRefinement
     *   }
     * })
     * 
     */
    delete<T extends AiRefinementDeleteArgs>(args: SelectSubset<T, AiRefinementDeleteArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiRefinement.
     * @param {AiRefinementUpdateArgs} args - Arguments to update one AiRefinement.
     * @example
     * // Update one AiRefinement
     * const aiRefinement = await prisma.aiRefinement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiRefinementUpdateArgs>(args: SelectSubset<T, AiRefinementUpdateArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiRefinements.
     * @param {AiRefinementDeleteManyArgs} args - Arguments to filter AiRefinements to delete.
     * @example
     * // Delete a few AiRefinements
     * const { count } = await prisma.aiRefinement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiRefinementDeleteManyArgs>(args?: SelectSubset<T, AiRefinementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiRefinements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiRefinements
     * const aiRefinement = await prisma.aiRefinement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiRefinementUpdateManyArgs>(args: SelectSubset<T, AiRefinementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiRefinements and returns the data updated in the database.
     * @param {AiRefinementUpdateManyAndReturnArgs} args - Arguments to update many AiRefinements.
     * @example
     * // Update many AiRefinements
     * const aiRefinement = await prisma.aiRefinement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiRefinements and only return the `id`
     * const aiRefinementWithIdOnly = await prisma.aiRefinement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiRefinementUpdateManyAndReturnArgs>(args: SelectSubset<T, AiRefinementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiRefinement.
     * @param {AiRefinementUpsertArgs} args - Arguments to update or create a AiRefinement.
     * @example
     * // Update or create a AiRefinement
     * const aiRefinement = await prisma.aiRefinement.upsert({
     *   create: {
     *     // ... data to create a AiRefinement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiRefinement we want to update
     *   }
     * })
     */
    upsert<T extends AiRefinementUpsertArgs>(args: SelectSubset<T, AiRefinementUpsertArgs<ExtArgs>>): Prisma__AiRefinementClient<$Result.GetResult<Prisma.$AiRefinementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiRefinements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementCountArgs} args - Arguments to filter AiRefinements to count.
     * @example
     * // Count the number of AiRefinements
     * const count = await prisma.aiRefinement.count({
     *   where: {
     *     // ... the filter for the AiRefinements we want to count
     *   }
     * })
    **/
    count<T extends AiRefinementCountArgs>(
      args?: Subset<T, AiRefinementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiRefinementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiRefinement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiRefinementAggregateArgs>(args: Subset<T, AiRefinementAggregateArgs>): Prisma.PrismaPromise<GetAiRefinementAggregateType<T>>

    /**
     * Group by AiRefinement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiRefinementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiRefinementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiRefinementGroupByArgs['orderBy'] }
        : { orderBy?: AiRefinementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiRefinementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiRefinementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiRefinement model
   */
  readonly fields: AiRefinementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiRefinement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiRefinementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobApplication<T extends JobApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobApplicationDefaultArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiRefinement model
   */
  interface AiRefinementFieldRefs {
    readonly id: FieldRef<"AiRefinement", 'String'>
    readonly resumeId: FieldRef<"AiRefinement", 'String'>
    readonly jobApplicationId: FieldRef<"AiRefinement", 'String'>
    readonly refinements: FieldRef<"AiRefinement", 'String'>
    readonly createdAt: FieldRef<"AiRefinement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiRefinement findUnique
   */
  export type AiRefinementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter, which AiRefinement to fetch.
     */
    where: AiRefinementWhereUniqueInput
  }

  /**
   * AiRefinement findUniqueOrThrow
   */
  export type AiRefinementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter, which AiRefinement to fetch.
     */
    where: AiRefinementWhereUniqueInput
  }

  /**
   * AiRefinement findFirst
   */
  export type AiRefinementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter, which AiRefinement to fetch.
     */
    where?: AiRefinementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRefinements to fetch.
     */
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiRefinements.
     */
    cursor?: AiRefinementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRefinements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRefinements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiRefinements.
     */
    distinct?: AiRefinementScalarFieldEnum | AiRefinementScalarFieldEnum[]
  }

  /**
   * AiRefinement findFirstOrThrow
   */
  export type AiRefinementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter, which AiRefinement to fetch.
     */
    where?: AiRefinementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRefinements to fetch.
     */
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiRefinements.
     */
    cursor?: AiRefinementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRefinements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRefinements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiRefinements.
     */
    distinct?: AiRefinementScalarFieldEnum | AiRefinementScalarFieldEnum[]
  }

  /**
   * AiRefinement findMany
   */
  export type AiRefinementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter, which AiRefinements to fetch.
     */
    where?: AiRefinementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiRefinements to fetch.
     */
    orderBy?: AiRefinementOrderByWithRelationInput | AiRefinementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiRefinements.
     */
    cursor?: AiRefinementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiRefinements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiRefinements.
     */
    skip?: number
    distinct?: AiRefinementScalarFieldEnum | AiRefinementScalarFieldEnum[]
  }

  /**
   * AiRefinement create
   */
  export type AiRefinementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * The data needed to create a AiRefinement.
     */
    data: XOR<AiRefinementCreateInput, AiRefinementUncheckedCreateInput>
  }

  /**
   * AiRefinement createMany
   */
  export type AiRefinementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiRefinements.
     */
    data: AiRefinementCreateManyInput | AiRefinementCreateManyInput[]
  }

  /**
   * AiRefinement createManyAndReturn
   */
  export type AiRefinementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * The data used to create many AiRefinements.
     */
    data: AiRefinementCreateManyInput | AiRefinementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiRefinement update
   */
  export type AiRefinementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * The data needed to update a AiRefinement.
     */
    data: XOR<AiRefinementUpdateInput, AiRefinementUncheckedUpdateInput>
    /**
     * Choose, which AiRefinement to update.
     */
    where: AiRefinementWhereUniqueInput
  }

  /**
   * AiRefinement updateMany
   */
  export type AiRefinementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiRefinements.
     */
    data: XOR<AiRefinementUpdateManyMutationInput, AiRefinementUncheckedUpdateManyInput>
    /**
     * Filter which AiRefinements to update
     */
    where?: AiRefinementWhereInput
    /**
     * Limit how many AiRefinements to update.
     */
    limit?: number
  }

  /**
   * AiRefinement updateManyAndReturn
   */
  export type AiRefinementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * The data used to update AiRefinements.
     */
    data: XOR<AiRefinementUpdateManyMutationInput, AiRefinementUncheckedUpdateManyInput>
    /**
     * Filter which AiRefinements to update
     */
    where?: AiRefinementWhereInput
    /**
     * Limit how many AiRefinements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiRefinement upsert
   */
  export type AiRefinementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * The filter to search for the AiRefinement to update in case it exists.
     */
    where: AiRefinementWhereUniqueInput
    /**
     * In case the AiRefinement found by the `where` argument doesn't exist, create a new AiRefinement with this data.
     */
    create: XOR<AiRefinementCreateInput, AiRefinementUncheckedCreateInput>
    /**
     * In case the AiRefinement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiRefinementUpdateInput, AiRefinementUncheckedUpdateInput>
  }

  /**
   * AiRefinement delete
   */
  export type AiRefinementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
    /**
     * Filter which AiRefinement to delete.
     */
    where: AiRefinementWhereUniqueInput
  }

  /**
   * AiRefinement deleteMany
   */
  export type AiRefinementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiRefinements to delete
     */
    where?: AiRefinementWhereInput
    /**
     * Limit how many AiRefinements to delete.
     */
    limit?: number
  }

  /**
   * AiRefinement without action
   */
  export type AiRefinementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiRefinement
     */
    select?: AiRefinementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiRefinement
     */
    omit?: AiRefinementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiRefinementInclude<ExtArgs> | null
  }


  /**
   * Model OpenAiResponse
   */

  export type AggregateOpenAiResponse = {
    _count: OpenAiResponseCountAggregateOutputType | null
    _min: OpenAiResponseMinAggregateOutputType | null
    _max: OpenAiResponseMaxAggregateOutputType | null
  }

  export type OpenAiResponseMinAggregateOutputType = {
    id: string | null
    resumeId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type OpenAiResponseMaxAggregateOutputType = {
    id: string | null
    resumeId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type OpenAiResponseCountAggregateOutputType = {
    id: number
    resumeId: number
    prompt: number
    response: number
    createdAt: number
    _all: number
  }


  export type OpenAiResponseMinAggregateInputType = {
    id?: true
    resumeId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type OpenAiResponseMaxAggregateInputType = {
    id?: true
    resumeId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type OpenAiResponseCountAggregateInputType = {
    id?: true
    resumeId?: true
    prompt?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type OpenAiResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpenAiResponse to aggregate.
     */
    where?: OpenAiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenAiResponses to fetch.
     */
    orderBy?: OpenAiResponseOrderByWithRelationInput | OpenAiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpenAiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenAiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenAiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpenAiResponses
    **/
    _count?: true | OpenAiResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpenAiResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpenAiResponseMaxAggregateInputType
  }

  export type GetOpenAiResponseAggregateType<T extends OpenAiResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateOpenAiResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpenAiResponse[P]>
      : GetScalarType<T[P], AggregateOpenAiResponse[P]>
  }




  export type OpenAiResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpenAiResponseWhereInput
    orderBy?: OpenAiResponseOrderByWithAggregationInput | OpenAiResponseOrderByWithAggregationInput[]
    by: OpenAiResponseScalarFieldEnum[] | OpenAiResponseScalarFieldEnum
    having?: OpenAiResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpenAiResponseCountAggregateInputType | true
    _min?: OpenAiResponseMinAggregateInputType
    _max?: OpenAiResponseMaxAggregateInputType
  }

  export type OpenAiResponseGroupByOutputType = {
    id: string
    resumeId: string
    prompt: string
    response: string
    createdAt: Date
    _count: OpenAiResponseCountAggregateOutputType | null
    _min: OpenAiResponseMinAggregateOutputType | null
    _max: OpenAiResponseMaxAggregateOutputType | null
  }

  type GetOpenAiResponseGroupByPayload<T extends OpenAiResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpenAiResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpenAiResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpenAiResponseGroupByOutputType[P]>
            : GetScalarType<T[P], OpenAiResponseGroupByOutputType[P]>
        }
      >
    >


  export type OpenAiResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openAiResponse"]>

  export type OpenAiResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openAiResponse"]>

  export type OpenAiResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumeId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openAiResponse"]>

  export type OpenAiResponseSelectScalar = {
    id?: boolean
    resumeId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type OpenAiResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumeId" | "prompt" | "response" | "createdAt", ExtArgs["result"]["openAiResponse"]>
  export type OpenAiResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type OpenAiResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type OpenAiResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $OpenAiResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpenAiResponse"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumeId: string
      prompt: string
      response: string
      createdAt: Date
    }, ExtArgs["result"]["openAiResponse"]>
    composites: {}
  }

  type OpenAiResponseGetPayload<S extends boolean | null | undefined | OpenAiResponseDefaultArgs> = $Result.GetResult<Prisma.$OpenAiResponsePayload, S>

  type OpenAiResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpenAiResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpenAiResponseCountAggregateInputType | true
    }

  export interface OpenAiResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpenAiResponse'], meta: { name: 'OpenAiResponse' } }
    /**
     * Find zero or one OpenAiResponse that matches the filter.
     * @param {OpenAiResponseFindUniqueArgs} args - Arguments to find a OpenAiResponse
     * @example
     * // Get one OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpenAiResponseFindUniqueArgs>(args: SelectSubset<T, OpenAiResponseFindUniqueArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpenAiResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpenAiResponseFindUniqueOrThrowArgs} args - Arguments to find a OpenAiResponse
     * @example
     * // Get one OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpenAiResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, OpenAiResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpenAiResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseFindFirstArgs} args - Arguments to find a OpenAiResponse
     * @example
     * // Get one OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpenAiResponseFindFirstArgs>(args?: SelectSubset<T, OpenAiResponseFindFirstArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpenAiResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseFindFirstOrThrowArgs} args - Arguments to find a OpenAiResponse
     * @example
     * // Get one OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpenAiResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, OpenAiResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpenAiResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpenAiResponses
     * const openAiResponses = await prisma.openAiResponse.findMany()
     * 
     * // Get first 10 OpenAiResponses
     * const openAiResponses = await prisma.openAiResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openAiResponseWithIdOnly = await prisma.openAiResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpenAiResponseFindManyArgs>(args?: SelectSubset<T, OpenAiResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpenAiResponse.
     * @param {OpenAiResponseCreateArgs} args - Arguments to create a OpenAiResponse.
     * @example
     * // Create one OpenAiResponse
     * const OpenAiResponse = await prisma.openAiResponse.create({
     *   data: {
     *     // ... data to create a OpenAiResponse
     *   }
     * })
     * 
     */
    create<T extends OpenAiResponseCreateArgs>(args: SelectSubset<T, OpenAiResponseCreateArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpenAiResponses.
     * @param {OpenAiResponseCreateManyArgs} args - Arguments to create many OpenAiResponses.
     * @example
     * // Create many OpenAiResponses
     * const openAiResponse = await prisma.openAiResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpenAiResponseCreateManyArgs>(args?: SelectSubset<T, OpenAiResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpenAiResponses and returns the data saved in the database.
     * @param {OpenAiResponseCreateManyAndReturnArgs} args - Arguments to create many OpenAiResponses.
     * @example
     * // Create many OpenAiResponses
     * const openAiResponse = await prisma.openAiResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpenAiResponses and only return the `id`
     * const openAiResponseWithIdOnly = await prisma.openAiResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpenAiResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, OpenAiResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpenAiResponse.
     * @param {OpenAiResponseDeleteArgs} args - Arguments to delete one OpenAiResponse.
     * @example
     * // Delete one OpenAiResponse
     * const OpenAiResponse = await prisma.openAiResponse.delete({
     *   where: {
     *     // ... filter to delete one OpenAiResponse
     *   }
     * })
     * 
     */
    delete<T extends OpenAiResponseDeleteArgs>(args: SelectSubset<T, OpenAiResponseDeleteArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpenAiResponse.
     * @param {OpenAiResponseUpdateArgs} args - Arguments to update one OpenAiResponse.
     * @example
     * // Update one OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpenAiResponseUpdateArgs>(args: SelectSubset<T, OpenAiResponseUpdateArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpenAiResponses.
     * @param {OpenAiResponseDeleteManyArgs} args - Arguments to filter OpenAiResponses to delete.
     * @example
     * // Delete a few OpenAiResponses
     * const { count } = await prisma.openAiResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpenAiResponseDeleteManyArgs>(args?: SelectSubset<T, OpenAiResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenAiResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpenAiResponses
     * const openAiResponse = await prisma.openAiResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpenAiResponseUpdateManyArgs>(args: SelectSubset<T, OpenAiResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpenAiResponses and returns the data updated in the database.
     * @param {OpenAiResponseUpdateManyAndReturnArgs} args - Arguments to update many OpenAiResponses.
     * @example
     * // Update many OpenAiResponses
     * const openAiResponse = await prisma.openAiResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpenAiResponses and only return the `id`
     * const openAiResponseWithIdOnly = await prisma.openAiResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpenAiResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, OpenAiResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpenAiResponse.
     * @param {OpenAiResponseUpsertArgs} args - Arguments to update or create a OpenAiResponse.
     * @example
     * // Update or create a OpenAiResponse
     * const openAiResponse = await prisma.openAiResponse.upsert({
     *   create: {
     *     // ... data to create a OpenAiResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpenAiResponse we want to update
     *   }
     * })
     */
    upsert<T extends OpenAiResponseUpsertArgs>(args: SelectSubset<T, OpenAiResponseUpsertArgs<ExtArgs>>): Prisma__OpenAiResponseClient<$Result.GetResult<Prisma.$OpenAiResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpenAiResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseCountArgs} args - Arguments to filter OpenAiResponses to count.
     * @example
     * // Count the number of OpenAiResponses
     * const count = await prisma.openAiResponse.count({
     *   where: {
     *     // ... the filter for the OpenAiResponses we want to count
     *   }
     * })
    **/
    count<T extends OpenAiResponseCountArgs>(
      args?: Subset<T, OpenAiResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpenAiResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpenAiResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpenAiResponseAggregateArgs>(args: Subset<T, OpenAiResponseAggregateArgs>): Prisma.PrismaPromise<GetOpenAiResponseAggregateType<T>>

    /**
     * Group by OpenAiResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpenAiResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpenAiResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpenAiResponseGroupByArgs['orderBy'] }
        : { orderBy?: OpenAiResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpenAiResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpenAiResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpenAiResponse model
   */
  readonly fields: OpenAiResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpenAiResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpenAiResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpenAiResponse model
   */
  interface OpenAiResponseFieldRefs {
    readonly id: FieldRef<"OpenAiResponse", 'String'>
    readonly resumeId: FieldRef<"OpenAiResponse", 'String'>
    readonly prompt: FieldRef<"OpenAiResponse", 'String'>
    readonly response: FieldRef<"OpenAiResponse", 'String'>
    readonly createdAt: FieldRef<"OpenAiResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpenAiResponse findUnique
   */
  export type OpenAiResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter, which OpenAiResponse to fetch.
     */
    where: OpenAiResponseWhereUniqueInput
  }

  /**
   * OpenAiResponse findUniqueOrThrow
   */
  export type OpenAiResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter, which OpenAiResponse to fetch.
     */
    where: OpenAiResponseWhereUniqueInput
  }

  /**
   * OpenAiResponse findFirst
   */
  export type OpenAiResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter, which OpenAiResponse to fetch.
     */
    where?: OpenAiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenAiResponses to fetch.
     */
    orderBy?: OpenAiResponseOrderByWithRelationInput | OpenAiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenAiResponses.
     */
    cursor?: OpenAiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenAiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenAiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenAiResponses.
     */
    distinct?: OpenAiResponseScalarFieldEnum | OpenAiResponseScalarFieldEnum[]
  }

  /**
   * OpenAiResponse findFirstOrThrow
   */
  export type OpenAiResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter, which OpenAiResponse to fetch.
     */
    where?: OpenAiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenAiResponses to fetch.
     */
    orderBy?: OpenAiResponseOrderByWithRelationInput | OpenAiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpenAiResponses.
     */
    cursor?: OpenAiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenAiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenAiResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpenAiResponses.
     */
    distinct?: OpenAiResponseScalarFieldEnum | OpenAiResponseScalarFieldEnum[]
  }

  /**
   * OpenAiResponse findMany
   */
  export type OpenAiResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter, which OpenAiResponses to fetch.
     */
    where?: OpenAiResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpenAiResponses to fetch.
     */
    orderBy?: OpenAiResponseOrderByWithRelationInput | OpenAiResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpenAiResponses.
     */
    cursor?: OpenAiResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpenAiResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpenAiResponses.
     */
    skip?: number
    distinct?: OpenAiResponseScalarFieldEnum | OpenAiResponseScalarFieldEnum[]
  }

  /**
   * OpenAiResponse create
   */
  export type OpenAiResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a OpenAiResponse.
     */
    data: XOR<OpenAiResponseCreateInput, OpenAiResponseUncheckedCreateInput>
  }

  /**
   * OpenAiResponse createMany
   */
  export type OpenAiResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpenAiResponses.
     */
    data: OpenAiResponseCreateManyInput | OpenAiResponseCreateManyInput[]
  }

  /**
   * OpenAiResponse createManyAndReturn
   */
  export type OpenAiResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * The data used to create many OpenAiResponses.
     */
    data: OpenAiResponseCreateManyInput | OpenAiResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpenAiResponse update
   */
  export type OpenAiResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a OpenAiResponse.
     */
    data: XOR<OpenAiResponseUpdateInput, OpenAiResponseUncheckedUpdateInput>
    /**
     * Choose, which OpenAiResponse to update.
     */
    where: OpenAiResponseWhereUniqueInput
  }

  /**
   * OpenAiResponse updateMany
   */
  export type OpenAiResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpenAiResponses.
     */
    data: XOR<OpenAiResponseUpdateManyMutationInput, OpenAiResponseUncheckedUpdateManyInput>
    /**
     * Filter which OpenAiResponses to update
     */
    where?: OpenAiResponseWhereInput
    /**
     * Limit how many OpenAiResponses to update.
     */
    limit?: number
  }

  /**
   * OpenAiResponse updateManyAndReturn
   */
  export type OpenAiResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * The data used to update OpenAiResponses.
     */
    data: XOR<OpenAiResponseUpdateManyMutationInput, OpenAiResponseUncheckedUpdateManyInput>
    /**
     * Filter which OpenAiResponses to update
     */
    where?: OpenAiResponseWhereInput
    /**
     * Limit how many OpenAiResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpenAiResponse upsert
   */
  export type OpenAiResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the OpenAiResponse to update in case it exists.
     */
    where: OpenAiResponseWhereUniqueInput
    /**
     * In case the OpenAiResponse found by the `where` argument doesn't exist, create a new OpenAiResponse with this data.
     */
    create: XOR<OpenAiResponseCreateInput, OpenAiResponseUncheckedCreateInput>
    /**
     * In case the OpenAiResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpenAiResponseUpdateInput, OpenAiResponseUncheckedUpdateInput>
  }

  /**
   * OpenAiResponse delete
   */
  export type OpenAiResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
    /**
     * Filter which OpenAiResponse to delete.
     */
    where: OpenAiResponseWhereUniqueInput
  }

  /**
   * OpenAiResponse deleteMany
   */
  export type OpenAiResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpenAiResponses to delete
     */
    where?: OpenAiResponseWhereInput
    /**
     * Limit how many OpenAiResponses to delete.
     */
    limit?: number
  }

  /**
   * OpenAiResponse without action
   */
  export type OpenAiResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenAiResponse
     */
    select?: OpenAiResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenAiResponse
     */
    omit?: OpenAiResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpenAiResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aiCallsLimit: 'aiCallsLimit'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    title: 'title',
    initials: 'initials',
    location: 'location',
    locationLink: 'locationLink',
    about: 'about',
    summary: 'summary',
    avatarUrl: 'avatarUrl',
    personalWebsiteUrl: 'personalWebsiteUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    email: 'email',
    tel: 'tel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SocialScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    school: 'school',
    degree: 'degree',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    company: 'company',
    link: 'link',
    title: 'title',
    start: 'start',
    end: 'end',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const WorkTasksScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkTasksScalarFieldEnum = (typeof WorkTasksScalarFieldEnum)[keyof typeof WorkTasksScalarFieldEnum]


  export const WorkBadgeScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkBadgeScalarFieldEnum = (typeof WorkBadgeScalarFieldEnum)[keyof typeof WorkBadgeScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectTechScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectTechScalarFieldEnum = (typeof ProjectTechScalarFieldEnum)[keyof typeof ProjectTechScalarFieldEnum]


  export const ProjectLinkScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    label: 'label',
    href: 'href',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectLinkScalarFieldEnum = (typeof ProjectLinkScalarFieldEnum)[keyof typeof ProjectLinkScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    company: 'company',
    position: 'position',
    status: 'status',
    appliedDate: 'appliedDate',
    jobUrl: 'jobUrl',
    jobDescription: 'jobDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const AiRefinementScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    jobApplicationId: 'jobApplicationId',
    refinements: 'refinements',
    createdAt: 'createdAt'
  };

  export type AiRefinementScalarFieldEnum = (typeof AiRefinementScalarFieldEnum)[keyof typeof AiRefinementScalarFieldEnum]


  export const OpenAiResponseScalarFieldEnum: {
    id: 'id',
    resumeId: 'resumeId',
    prompt: 'prompt',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type OpenAiResponseScalarFieldEnum = (typeof OpenAiResponseScalarFieldEnum)[keyof typeof OpenAiResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    aiCallsLimit?: IntFilter<"User"> | number
    resumes?: ResumeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCallsLimit?: SortOrder
    resumes?: ResumeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    aiCallsLimit?: IntFilter<"User"> | number
    resumes?: ResumeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCallsLimit?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    aiCallsLimit?: IntWithAggregatesFilter<"User"> | number
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringNullableFilter<"Resume"> | string | null
    name?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    initials?: StringNullableFilter<"Resume"> | string | null
    location?: StringNullableFilter<"Resume"> | string | null
    locationLink?: StringNullableFilter<"Resume"> | string | null
    about?: StringNullableFilter<"Resume"> | string | null
    summary?: StringNullableFilter<"Resume"> | string | null
    avatarUrl?: StringNullableFilter<"Resume"> | string | null
    personalWebsiteUrl?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    education?: EducationListRelationFilter
    work?: WorkListRelationFilter
    skills?: SkillListRelationFilter
    projects?: ProjectListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    aiRefinements?: AiRefinementListRelationFilter
    openAiResponses?: OpenAiResponseListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrder
    initials?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    locationLink?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    personalWebsiteUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    education?: EducationOrderByRelationAggregateInput
    work?: WorkOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    aiRefinements?: AiRefinementOrderByRelationAggregateInput
    openAiResponses?: OpenAiResponseOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    userId?: StringNullableFilter<"Resume"> | string | null
    name?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    initials?: StringNullableFilter<"Resume"> | string | null
    location?: StringNullableFilter<"Resume"> | string | null
    locationLink?: StringNullableFilter<"Resume"> | string | null
    about?: StringNullableFilter<"Resume"> | string | null
    summary?: StringNullableFilter<"Resume"> | string | null
    avatarUrl?: StringNullableFilter<"Resume"> | string | null
    personalWebsiteUrl?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
    education?: EducationListRelationFilter
    work?: WorkListRelationFilter
    skills?: SkillListRelationFilter
    projects?: ProjectListRelationFilter
    jobApplications?: JobApplicationListRelationFilter
    aiRefinements?: AiRefinementListRelationFilter
    openAiResponses?: OpenAiResponseListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    title?: SortOrder
    initials?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    locationLink?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    personalWebsiteUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    userId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    name?: StringWithAggregatesFilter<"Resume"> | string
    title?: StringWithAggregatesFilter<"Resume"> | string
    initials?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    location?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    locationLink?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    about?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    personalWebsiteUrl?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    resumeId?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    tel?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    social?: SocialListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    email?: SortOrder
    tel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    social?: SocialOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resumeId?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    email?: StringFilter<"Contact"> | string
    tel?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    social?: SocialListRelationFilter
  }, "id" | "resumeId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    email?: SortOrder
    tel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    resumeId?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    tel?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type SocialWhereInput = {
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    id?: StringFilter<"Social"> | string
    contactId?: StringFilter<"Social"> | string
    name?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
    createdAt?: DateTimeFilter<"Social"> | Date | string
    updatedAt?: DateTimeFilter<"Social"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type SocialOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: ContactOrderByWithRelationInput
  }

  export type SocialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    contactId?: StringFilter<"Social"> | string
    name?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
    createdAt?: DateTimeFilter<"Social"> | Date | string
    updatedAt?: DateTimeFilter<"Social"> | Date | string
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "id">

  export type SocialOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialCountOrderByAggregateInput
    _max?: SocialMaxOrderByAggregateInput
    _min?: SocialMinOrderByAggregateInput
  }

  export type SocialScalarWhereWithAggregatesInput = {
    AND?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    OR?: SocialScalarWhereWithAggregatesInput[]
    NOT?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Social"> | string
    contactId?: StringWithAggregatesFilter<"Social"> | string
    name?: StringWithAggregatesFilter<"Social"> | string
    url?: StringWithAggregatesFilter<"Social"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Social"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Social"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    resumeId?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    start?: StringFilter<"Education"> | string
    end?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    resumeId?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    start?: StringFilter<"Education"> | string
    end?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    resumeId?: StringWithAggregatesFilter<"Education"> | string
    school?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    start?: StringWithAggregatesFilter<"Education"> | string
    end?: StringWithAggregatesFilter<"Education"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    resumeId?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    link?: StringNullableFilter<"Work"> | string | null
    title?: StringFilter<"Work"> | string
    start?: StringFilter<"Work"> | string
    end?: StringNullableFilter<"Work"> | string | null
    description?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    tasks?: WorkTasksListRelationFilter
    badges?: WorkBadgeListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    link?: SortOrderInput | SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    tasks?: WorkTasksOrderByRelationAggregateInput
    badges?: WorkBadgeOrderByRelationAggregateInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    resumeId?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    link?: StringNullableFilter<"Work"> | string | null
    title?: StringFilter<"Work"> | string
    start?: StringFilter<"Work"> | string
    end?: StringNullableFilter<"Work"> | string | null
    description?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    tasks?: WorkTasksListRelationFilter
    badges?: WorkBadgeListRelationFilter
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    link?: SortOrderInput | SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    resumeId?: StringWithAggregatesFilter<"Work"> | string
    company?: StringWithAggregatesFilter<"Work"> | string
    link?: StringNullableWithAggregatesFilter<"Work"> | string | null
    title?: StringWithAggregatesFilter<"Work"> | string
    start?: StringWithAggregatesFilter<"Work"> | string
    end?: StringNullableWithAggregatesFilter<"Work"> | string | null
    description?: StringWithAggregatesFilter<"Work"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type WorkTasksWhereInput = {
    AND?: WorkTasksWhereInput | WorkTasksWhereInput[]
    OR?: WorkTasksWhereInput[]
    NOT?: WorkTasksWhereInput | WorkTasksWhereInput[]
    id?: StringFilter<"WorkTasks"> | string
    workId?: StringFilter<"WorkTasks"> | string
    description?: StringFilter<"WorkTasks"> | string
    createdAt?: DateTimeFilter<"WorkTasks"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTasks"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type WorkTasksOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type WorkTasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkTasksWhereInput | WorkTasksWhereInput[]
    OR?: WorkTasksWhereInput[]
    NOT?: WorkTasksWhereInput | WorkTasksWhereInput[]
    workId?: StringFilter<"WorkTasks"> | string
    description?: StringFilter<"WorkTasks"> | string
    createdAt?: DateTimeFilter<"WorkTasks"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTasks"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type WorkTasksOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkTasksCountOrderByAggregateInput
    _max?: WorkTasksMaxOrderByAggregateInput
    _min?: WorkTasksMinOrderByAggregateInput
  }

  export type WorkTasksScalarWhereWithAggregatesInput = {
    AND?: WorkTasksScalarWhereWithAggregatesInput | WorkTasksScalarWhereWithAggregatesInput[]
    OR?: WorkTasksScalarWhereWithAggregatesInput[]
    NOT?: WorkTasksScalarWhereWithAggregatesInput | WorkTasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkTasks"> | string
    workId?: StringWithAggregatesFilter<"WorkTasks"> | string
    description?: StringWithAggregatesFilter<"WorkTasks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkTasks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkTasks"> | Date | string
  }

  export type WorkBadgeWhereInput = {
    AND?: WorkBadgeWhereInput | WorkBadgeWhereInput[]
    OR?: WorkBadgeWhereInput[]
    NOT?: WorkBadgeWhereInput | WorkBadgeWhereInput[]
    id?: StringFilter<"WorkBadge"> | string
    workId?: StringFilter<"WorkBadge"> | string
    name?: StringFilter<"WorkBadge"> | string
    createdAt?: DateTimeFilter<"WorkBadge"> | Date | string
    updatedAt?: DateTimeFilter<"WorkBadge"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }

  export type WorkBadgeOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    work?: WorkOrderByWithRelationInput
  }

  export type WorkBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkBadgeWhereInput | WorkBadgeWhereInput[]
    OR?: WorkBadgeWhereInput[]
    NOT?: WorkBadgeWhereInput | WorkBadgeWhereInput[]
    workId?: StringFilter<"WorkBadge"> | string
    name?: StringFilter<"WorkBadge"> | string
    createdAt?: DateTimeFilter<"WorkBadge"> | Date | string
    updatedAt?: DateTimeFilter<"WorkBadge"> | Date | string
    work?: XOR<WorkScalarRelationFilter, WorkWhereInput>
  }, "id">

  export type WorkBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkBadgeCountOrderByAggregateInput
    _max?: WorkBadgeMaxOrderByAggregateInput
    _min?: WorkBadgeMinOrderByAggregateInput
  }

  export type WorkBadgeScalarWhereWithAggregatesInput = {
    AND?: WorkBadgeScalarWhereWithAggregatesInput | WorkBadgeScalarWhereWithAggregatesInput[]
    OR?: WorkBadgeScalarWhereWithAggregatesInput[]
    NOT?: WorkBadgeScalarWhereWithAggregatesInput | WorkBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkBadge"> | string
    workId?: StringWithAggregatesFilter<"WorkBadge"> | string
    name?: StringWithAggregatesFilter<"WorkBadge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkBadge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkBadge"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    resumeId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    resumeId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    resumeId?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    resumeId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    techStack?: ProjectTechListRelationFilter
    link?: XOR<ProjectLinkNullableScalarRelationFilter, ProjectLinkWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    techStack?: ProjectTechOrderByRelationAggregateInput
    link?: ProjectLinkOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    resumeId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    techStack?: ProjectTechListRelationFilter
    link?: XOR<ProjectLinkNullableScalarRelationFilter, ProjectLinkWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    resumeId?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectTechWhereInput = {
    AND?: ProjectTechWhereInput | ProjectTechWhereInput[]
    OR?: ProjectTechWhereInput[]
    NOT?: ProjectTechWhereInput | ProjectTechWhereInput[]
    id?: StringFilter<"ProjectTech"> | string
    projectId?: StringFilter<"ProjectTech"> | string
    name?: StringFilter<"ProjectTech"> | string
    createdAt?: DateTimeFilter<"ProjectTech"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTech"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectTechOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectTechWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectTechWhereInput | ProjectTechWhereInput[]
    OR?: ProjectTechWhereInput[]
    NOT?: ProjectTechWhereInput | ProjectTechWhereInput[]
    projectId?: StringFilter<"ProjectTech"> | string
    name?: StringFilter<"ProjectTech"> | string
    createdAt?: DateTimeFilter<"ProjectTech"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTech"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectTechOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectTechCountOrderByAggregateInput
    _max?: ProjectTechMaxOrderByAggregateInput
    _min?: ProjectTechMinOrderByAggregateInput
  }

  export type ProjectTechScalarWhereWithAggregatesInput = {
    AND?: ProjectTechScalarWhereWithAggregatesInput | ProjectTechScalarWhereWithAggregatesInput[]
    OR?: ProjectTechScalarWhereWithAggregatesInput[]
    NOT?: ProjectTechScalarWhereWithAggregatesInput | ProjectTechScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTech"> | string
    projectId?: StringWithAggregatesFilter<"ProjectTech"> | string
    name?: StringWithAggregatesFilter<"ProjectTech"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectTech"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectTech"> | Date | string
  }

  export type ProjectLinkWhereInput = {
    AND?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    OR?: ProjectLinkWhereInput[]
    NOT?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    id?: StringFilter<"ProjectLink"> | string
    projectId?: StringFilter<"ProjectLink"> | string
    label?: StringFilter<"ProjectLink"> | string
    href?: StringFilter<"ProjectLink"> | string
    createdAt?: DateTimeFilter<"ProjectLink"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectLink"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectLinkOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    OR?: ProjectLinkWhereInput[]
    NOT?: ProjectLinkWhereInput | ProjectLinkWhereInput[]
    label?: StringFilter<"ProjectLink"> | string
    href?: StringFilter<"ProjectLink"> | string
    createdAt?: DateTimeFilter<"ProjectLink"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectLink"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type ProjectLinkOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectLinkCountOrderByAggregateInput
    _max?: ProjectLinkMaxOrderByAggregateInput
    _min?: ProjectLinkMinOrderByAggregateInput
  }

  export type ProjectLinkScalarWhereWithAggregatesInput = {
    AND?: ProjectLinkScalarWhereWithAggregatesInput | ProjectLinkScalarWhereWithAggregatesInput[]
    OR?: ProjectLinkScalarWhereWithAggregatesInput[]
    NOT?: ProjectLinkScalarWhereWithAggregatesInput | ProjectLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectLink"> | string
    projectId?: StringWithAggregatesFilter<"ProjectLink"> | string
    label?: StringWithAggregatesFilter<"ProjectLink"> | string
    href?: StringWithAggregatesFilter<"ProjectLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectLink"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    resumeId?: StringFilter<"JobApplication"> | string
    company?: StringFilter<"JobApplication"> | string
    position?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedDate?: DateTimeFilter<"JobApplication"> | Date | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    aiRefinements?: AiRefinementListRelationFilter
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    jobUrl?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    aiRefinements?: AiRefinementOrderByRelationAggregateInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    resumeId?: StringFilter<"JobApplication"> | string
    company?: StringFilter<"JobApplication"> | string
    position?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedDate?: DateTimeFilter<"JobApplication"> | Date | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    aiRefinements?: AiRefinementListRelationFilter
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    jobUrl?: SortOrderInput | SortOrder
    jobDescription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    resumeId?: StringWithAggregatesFilter<"JobApplication"> | string
    company?: StringWithAggregatesFilter<"JobApplication"> | string
    position?: StringWithAggregatesFilter<"JobApplication"> | string
    status?: StringWithAggregatesFilter<"JobApplication"> | string
    appliedDate?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    jobUrl?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    jobDescription?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type AiRefinementWhereInput = {
    AND?: AiRefinementWhereInput | AiRefinementWhereInput[]
    OR?: AiRefinementWhereInput[]
    NOT?: AiRefinementWhereInput | AiRefinementWhereInput[]
    id?: StringFilter<"AiRefinement"> | string
    resumeId?: StringFilter<"AiRefinement"> | string
    jobApplicationId?: StringFilter<"AiRefinement"> | string
    refinements?: StringFilter<"AiRefinement"> | string
    createdAt?: DateTimeFilter<"AiRefinement"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }

  export type AiRefinementOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    jobApplicationId?: SortOrder
    refinements?: SortOrder
    createdAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
    jobApplication?: JobApplicationOrderByWithRelationInput
  }

  export type AiRefinementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiRefinementWhereInput | AiRefinementWhereInput[]
    OR?: AiRefinementWhereInput[]
    NOT?: AiRefinementWhereInput | AiRefinementWhereInput[]
    resumeId?: StringFilter<"AiRefinement"> | string
    jobApplicationId?: StringFilter<"AiRefinement"> | string
    refinements?: StringFilter<"AiRefinement"> | string
    createdAt?: DateTimeFilter<"AiRefinement"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
    jobApplication?: XOR<JobApplicationScalarRelationFilter, JobApplicationWhereInput>
  }, "id">

  export type AiRefinementOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    jobApplicationId?: SortOrder
    refinements?: SortOrder
    createdAt?: SortOrder
    _count?: AiRefinementCountOrderByAggregateInput
    _max?: AiRefinementMaxOrderByAggregateInput
    _min?: AiRefinementMinOrderByAggregateInput
  }

  export type AiRefinementScalarWhereWithAggregatesInput = {
    AND?: AiRefinementScalarWhereWithAggregatesInput | AiRefinementScalarWhereWithAggregatesInput[]
    OR?: AiRefinementScalarWhereWithAggregatesInput[]
    NOT?: AiRefinementScalarWhereWithAggregatesInput | AiRefinementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiRefinement"> | string
    resumeId?: StringWithAggregatesFilter<"AiRefinement"> | string
    jobApplicationId?: StringWithAggregatesFilter<"AiRefinement"> | string
    refinements?: StringWithAggregatesFilter<"AiRefinement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiRefinement"> | Date | string
  }

  export type OpenAiResponseWhereInput = {
    AND?: OpenAiResponseWhereInput | OpenAiResponseWhereInput[]
    OR?: OpenAiResponseWhereInput[]
    NOT?: OpenAiResponseWhereInput | OpenAiResponseWhereInput[]
    id?: StringFilter<"OpenAiResponse"> | string
    resumeId?: StringFilter<"OpenAiResponse"> | string
    prompt?: StringFilter<"OpenAiResponse"> | string
    response?: StringFilter<"OpenAiResponse"> | string
    createdAt?: DateTimeFilter<"OpenAiResponse"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type OpenAiResponseOrderByWithRelationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type OpenAiResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpenAiResponseWhereInput | OpenAiResponseWhereInput[]
    OR?: OpenAiResponseWhereInput[]
    NOT?: OpenAiResponseWhereInput | OpenAiResponseWhereInput[]
    resumeId?: StringFilter<"OpenAiResponse"> | string
    prompt?: StringFilter<"OpenAiResponse"> | string
    response?: StringFilter<"OpenAiResponse"> | string
    createdAt?: DateTimeFilter<"OpenAiResponse"> | Date | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type OpenAiResponseOrderByWithAggregationInput = {
    id?: SortOrder
    resumeId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: OpenAiResponseCountOrderByAggregateInput
    _max?: OpenAiResponseMaxOrderByAggregateInput
    _min?: OpenAiResponseMinOrderByAggregateInput
  }

  export type OpenAiResponseScalarWhereWithAggregatesInput = {
    AND?: OpenAiResponseScalarWhereWithAggregatesInput | OpenAiResponseScalarWhereWithAggregatesInput[]
    OR?: OpenAiResponseScalarWhereWithAggregatesInput[]
    NOT?: OpenAiResponseScalarWhereWithAggregatesInput | OpenAiResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpenAiResponse"> | string
    resumeId?: StringWithAggregatesFilter<"OpenAiResponse"> | string
    prompt?: StringWithAggregatesFilter<"OpenAiResponse"> | string
    response?: StringWithAggregatesFilter<"OpenAiResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OpenAiResponse"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCallsLimit?: number
    resumes?: ResumeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCallsLimit?: number
    resumes?: ResumeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
    resumes?: ResumeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
    resumes?: ResumeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCallsLimit?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
  }

  export type ResumeCreateInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutContactInput
    social?: SocialCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    resumeId: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    social?: SocialUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutContactNestedInput
    social?: SocialUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    social?: SocialUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    resumeId: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactCreateNestedOneWithoutSocialInput
  }

  export type SocialUncheckedCreateInput = {
    id?: string
    contactId: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutSocialNestedInput
  }

  export type SocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateManyInput = {
    id?: string
    contactId: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    id?: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    resumeId: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyInput = {
    id?: string
    resumeId: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutWorkInput
    tasks?: WorkTasksCreateNestedManyWithoutWorkInput
    badges?: WorkBadgeCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: string
    resumeId: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: WorkTasksUncheckedCreateNestedManyWithoutWorkInput
    badges?: WorkBadgeUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutWorkNestedInput
    tasks?: WorkTasksUpdateManyWithoutWorkNestedInput
    badges?: WorkBadgeUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: WorkTasksUncheckedUpdateManyWithoutWorkNestedInput
    badges?: WorkBadgeUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    id?: string
    resumeId: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksCreateInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutTasksInput
  }

  export type WorkTasksUncheckedCreateInput = {
    id?: string
    workId: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutTasksNestedInput
  }

  export type WorkTasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksCreateManyInput = {
    id?: string
    workId: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    work: WorkCreateNestedOneWithoutBadgesInput
  }

  export type WorkBadgeUncheckedCreateInput = {
    id?: string
    workId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type WorkBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeCreateManyInput = {
    id?: string
    workId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    resumeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: string
    resumeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutProjectsInput
    techStack?: ProjectTechCreateNestedManyWithoutProjectInput
    link?: ProjectLinkCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    resumeId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techStack?: ProjectTechUncheckedCreateNestedManyWithoutProjectInput
    link?: ProjectLinkUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutProjectsNestedInput
    techStack?: ProjectTechUpdateManyWithoutProjectNestedInput
    link?: ProjectLinkUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: ProjectTechUncheckedUpdateManyWithoutProjectNestedInput
    link?: ProjectLinkUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    resumeId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTechStackInput
  }

  export type ProjectTechUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTechStackNestedInput
  }

  export type ProjectTechUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechCreateManyInput = {
    id?: string
    projectId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectLinkCreateInput = {
    id?: string
    label: string
    href: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutLinkInput
  }

  export type ProjectLinkUncheckedCreateInput = {
    id?: string
    projectId: string
    label: string
    href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLinkNestedInput
  }

  export type ProjectLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectLinkCreateManyInput = {
    id?: string
    projectId: string
    label: string
    href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    id?: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutJobApplicationsInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    resumeId: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    resumeId: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementCreateInput = {
    id?: string
    refinements: string
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutAiRefinementsInput
    jobApplication: JobApplicationCreateNestedOneWithoutAiRefinementsInput
  }

  export type AiRefinementUncheckedCreateInput = {
    id?: string
    resumeId: string
    jobApplicationId: string
    refinements: string
    createdAt?: Date | string
  }

  export type AiRefinementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutAiRefinementsNestedInput
    jobApplication?: JobApplicationUpdateOneRequiredWithoutAiRefinementsNestedInput
  }

  export type AiRefinementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementCreateManyInput = {
    id?: string
    resumeId: string
    jobApplicationId: string
    refinements: string
    createdAt?: Date | string
  }

  export type AiRefinementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseCreateInput = {
    id?: string
    prompt: string
    response: string
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutOpenAiResponsesInput
  }

  export type OpenAiResponseUncheckedCreateInput = {
    id?: string
    resumeId: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type OpenAiResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutOpenAiResponsesNestedInput
  }

  export type OpenAiResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseCreateManyInput = {
    id?: string
    resumeId: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type OpenAiResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCallsLimit?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    aiCallsLimit?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCallsLimit?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCallsLimit?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    aiCallsLimit?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type AiRefinementListRelationFilter = {
    every?: AiRefinementWhereInput
    some?: AiRefinementWhereInput
    none?: AiRefinementWhereInput
  }

  export type OpenAiResponseListRelationFilter = {
    every?: OpenAiResponseWhereInput
    some?: OpenAiResponseWhereInput
    none?: OpenAiResponseWhereInput
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiRefinementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpenAiResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    initials?: SortOrder
    location?: SortOrder
    locationLink?: SortOrder
    about?: SortOrder
    summary?: SortOrder
    avatarUrl?: SortOrder
    personalWebsiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    initials?: SortOrder
    location?: SortOrder
    locationLink?: SortOrder
    about?: SortOrder
    summary?: SortOrder
    avatarUrl?: SortOrder
    personalWebsiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    title?: SortOrder
    initials?: SortOrder
    location?: SortOrder
    locationLink?: SortOrder
    about?: SortOrder
    summary?: SortOrder
    avatarUrl?: SortOrder
    personalWebsiteUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type SocialListRelationFilter = {
    every?: SocialWhereInput
    some?: SocialWhereInput
    none?: SocialWhereInput
  }

  export type SocialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type SocialCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkTasksListRelationFilter = {
    every?: WorkTasksWhereInput
    some?: WorkTasksWhereInput
    none?: WorkTasksWhereInput
  }

  export type WorkBadgeListRelationFilter = {
    every?: WorkBadgeWhereInput
    some?: WorkBadgeWhereInput
    none?: WorkBadgeWhereInput
  }

  export type WorkTasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    link?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    link?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    link?: SortOrder
    title?: SortOrder
    start?: SortOrder
    end?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkScalarRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type WorkTasksCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkTasksMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkTasksMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTechListRelationFilter = {
    every?: ProjectTechWhereInput
    some?: ProjectTechWhereInput
    none?: ProjectTechWhereInput
  }

  export type ProjectLinkNullableScalarRelationFilter = {
    is?: ProjectLinkWhereInput | null
    isNot?: ProjectLinkWhereInput | null
  }

  export type ProjectTechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectTechCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTechMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTechMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectLinkCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectLinkMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    label?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    status?: SortOrder
    appliedDate?: SortOrder
    jobUrl?: SortOrder
    jobDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationScalarRelationFilter = {
    is?: JobApplicationWhereInput
    isNot?: JobApplicationWhereInput
  }

  export type AiRefinementCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    jobApplicationId?: SortOrder
    refinements?: SortOrder
    createdAt?: SortOrder
  }

  export type AiRefinementMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    jobApplicationId?: SortOrder
    refinements?: SortOrder
    createdAt?: SortOrder
  }

  export type AiRefinementMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    jobApplicationId?: SortOrder
    refinements?: SortOrder
    createdAt?: SortOrder
  }

  export type OpenAiResponseCountOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type OpenAiResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type OpenAiResponseMinOrderByAggregateInput = {
    id?: SortOrder
    resumeId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResumesInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    connect?: UserWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutResumeInput = {
    create?: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
    connectOrCreate?: ContactCreateOrConnectWithoutResumeInput
    connect?: ContactWhereUniqueInput
  }

  export type EducationCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type WorkCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput> | WorkCreateWithoutResumeInput[] | WorkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutResumeInput | WorkCreateOrConnectWithoutResumeInput[]
    createMany?: WorkCreateManyResumeInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutResumeInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type JobApplicationCreateNestedManyWithoutResumeInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type AiRefinementCreateNestedManyWithoutResumeInput = {
    create?: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput> | AiRefinementCreateWithoutResumeInput[] | AiRefinementUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutResumeInput | AiRefinementCreateOrConnectWithoutResumeInput[]
    createMany?: AiRefinementCreateManyResumeInputEnvelope
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
  }

  export type OpenAiResponseCreateNestedManyWithoutResumeInput = {
    create?: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput> | OpenAiResponseCreateWithoutResumeInput[] | OpenAiResponseUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: OpenAiResponseCreateOrConnectWithoutResumeInput | OpenAiResponseCreateOrConnectWithoutResumeInput[]
    createMany?: OpenAiResponseCreateManyResumeInputEnvelope
    connect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedOneWithoutResumeInput = {
    create?: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
    connectOrCreate?: ContactCreateOrConnectWithoutResumeInput
    connect?: ContactWhereUniqueInput
  }

  export type EducationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput> | WorkCreateWithoutResumeInput[] | WorkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutResumeInput | WorkCreateOrConnectWithoutResumeInput[]
    createMany?: WorkCreateManyResumeInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type AiRefinementUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput> | AiRefinementCreateWithoutResumeInput[] | AiRefinementUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutResumeInput | AiRefinementCreateOrConnectWithoutResumeInput[]
    createMany?: AiRefinementCreateManyResumeInputEnvelope
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
  }

  export type OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput> | OpenAiResponseCreateWithoutResumeInput[] | OpenAiResponseUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: OpenAiResponseCreateOrConnectWithoutResumeInput | OpenAiResponseCreateOrConnectWithoutResumeInput[]
    createMany?: OpenAiResponseCreateManyResumeInputEnvelope
    connect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutResumesNestedInput = {
    create?: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumesInput
    upsert?: UserUpsertWithoutResumesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumesInput, UserUpdateWithoutResumesInput>, UserUncheckedUpdateWithoutResumesInput>
  }

  export type ContactUpdateOneWithoutResumeNestedInput = {
    create?: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
    connectOrCreate?: ContactCreateOrConnectWithoutResumeInput
    upsert?: ContactUpsertWithoutResumeInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutResumeInput, ContactUpdateWithoutResumeInput>, ContactUncheckedUpdateWithoutResumeInput>
  }

  export type EducationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type WorkUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput> | WorkCreateWithoutResumeInput[] | WorkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutResumeInput | WorkCreateOrConnectWithoutResumeInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutResumeInput | WorkUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorkCreateManyResumeInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutResumeInput | WorkUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutResumeInput | WorkUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutResumeInput | SkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutResumeInput | SkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutResumeInput | SkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type JobApplicationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutResumeInput | JobApplicationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutResumeInput | JobApplicationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutResumeInput | JobApplicationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type AiRefinementUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput> | AiRefinementCreateWithoutResumeInput[] | AiRefinementUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutResumeInput | AiRefinementCreateOrConnectWithoutResumeInput[]
    upsert?: AiRefinementUpsertWithWhereUniqueWithoutResumeInput | AiRefinementUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AiRefinementCreateManyResumeInputEnvelope
    set?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    disconnect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    delete?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    update?: AiRefinementUpdateWithWhereUniqueWithoutResumeInput | AiRefinementUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AiRefinementUpdateManyWithWhereWithoutResumeInput | AiRefinementUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
  }

  export type OpenAiResponseUpdateManyWithoutResumeNestedInput = {
    create?: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput> | OpenAiResponseCreateWithoutResumeInput[] | OpenAiResponseUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: OpenAiResponseCreateOrConnectWithoutResumeInput | OpenAiResponseCreateOrConnectWithoutResumeInput[]
    upsert?: OpenAiResponseUpsertWithWhereUniqueWithoutResumeInput | OpenAiResponseUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: OpenAiResponseCreateManyResumeInputEnvelope
    set?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    disconnect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    delete?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    connect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    update?: OpenAiResponseUpdateWithWhereUniqueWithoutResumeInput | OpenAiResponseUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: OpenAiResponseUpdateManyWithWhereWithoutResumeInput | OpenAiResponseUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: OpenAiResponseScalarWhereInput | OpenAiResponseScalarWhereInput[]
  }

  export type ContactUncheckedUpdateOneWithoutResumeNestedInput = {
    create?: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
    connectOrCreate?: ContactCreateOrConnectWithoutResumeInput
    upsert?: ContactUpsertWithoutResumeInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutResumeInput, ContactUpdateWithoutResumeInput>, ContactUncheckedUpdateWithoutResumeInput>
  }

  export type EducationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type WorkUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput> | WorkCreateWithoutResumeInput[] | WorkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutResumeInput | WorkCreateOrConnectWithoutResumeInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutResumeInput | WorkUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorkCreateManyResumeInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutResumeInput | WorkUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutResumeInput | WorkUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutResumeInput | SkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutResumeInput | SkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutResumeInput | SkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput> | JobApplicationCreateWithoutResumeInput[] | JobApplicationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutResumeInput | JobApplicationCreateOrConnectWithoutResumeInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutResumeInput | JobApplicationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: JobApplicationCreateManyResumeInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutResumeInput | JobApplicationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutResumeInput | JobApplicationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type AiRefinementUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput> | AiRefinementCreateWithoutResumeInput[] | AiRefinementUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutResumeInput | AiRefinementCreateOrConnectWithoutResumeInput[]
    upsert?: AiRefinementUpsertWithWhereUniqueWithoutResumeInput | AiRefinementUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: AiRefinementCreateManyResumeInputEnvelope
    set?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    disconnect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    delete?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    update?: AiRefinementUpdateWithWhereUniqueWithoutResumeInput | AiRefinementUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: AiRefinementUpdateManyWithWhereWithoutResumeInput | AiRefinementUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
  }

  export type OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput> | OpenAiResponseCreateWithoutResumeInput[] | OpenAiResponseUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: OpenAiResponseCreateOrConnectWithoutResumeInput | OpenAiResponseCreateOrConnectWithoutResumeInput[]
    upsert?: OpenAiResponseUpsertWithWhereUniqueWithoutResumeInput | OpenAiResponseUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: OpenAiResponseCreateManyResumeInputEnvelope
    set?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    disconnect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    delete?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    connect?: OpenAiResponseWhereUniqueInput | OpenAiResponseWhereUniqueInput[]
    update?: OpenAiResponseUpdateWithWhereUniqueWithoutResumeInput | OpenAiResponseUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: OpenAiResponseUpdateManyWithWhereWithoutResumeInput | OpenAiResponseUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: OpenAiResponseScalarWhereInput | OpenAiResponseScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutContactInput = {
    create?: XOR<ResumeCreateWithoutContactInput, ResumeUncheckedCreateWithoutContactInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutContactInput
    connect?: ResumeWhereUniqueInput
  }

  export type SocialCreateNestedManyWithoutContactInput = {
    create?: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput> | SocialCreateWithoutContactInput[] | SocialUncheckedCreateWithoutContactInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutContactInput | SocialCreateOrConnectWithoutContactInput[]
    createMany?: SocialCreateManyContactInputEnvelope
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
  }

  export type SocialUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput> | SocialCreateWithoutContactInput[] | SocialUncheckedCreateWithoutContactInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutContactInput | SocialCreateOrConnectWithoutContactInput[]
    createMany?: SocialCreateManyContactInputEnvelope
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
  }

  export type ResumeUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<ResumeCreateWithoutContactInput, ResumeUncheckedCreateWithoutContactInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutContactInput
    upsert?: ResumeUpsertWithoutContactInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutContactInput, ResumeUpdateWithoutContactInput>, ResumeUncheckedUpdateWithoutContactInput>
  }

  export type SocialUpdateManyWithoutContactNestedInput = {
    create?: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput> | SocialCreateWithoutContactInput[] | SocialUncheckedCreateWithoutContactInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutContactInput | SocialCreateOrConnectWithoutContactInput[]
    upsert?: SocialUpsertWithWhereUniqueWithoutContactInput | SocialUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: SocialCreateManyContactInputEnvelope
    set?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    disconnect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    delete?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    update?: SocialUpdateWithWhereUniqueWithoutContactInput | SocialUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: SocialUpdateManyWithWhereWithoutContactInput | SocialUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: SocialScalarWhereInput | SocialScalarWhereInput[]
  }

  export type SocialUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput> | SocialCreateWithoutContactInput[] | SocialUncheckedCreateWithoutContactInput[]
    connectOrCreate?: SocialCreateOrConnectWithoutContactInput | SocialCreateOrConnectWithoutContactInput[]
    upsert?: SocialUpsertWithWhereUniqueWithoutContactInput | SocialUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: SocialCreateManyContactInputEnvelope
    set?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    disconnect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    delete?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    connect?: SocialWhereUniqueInput | SocialWhereUniqueInput[]
    update?: SocialUpdateWithWhereUniqueWithoutContactInput | SocialUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: SocialUpdateManyWithWhereWithoutContactInput | SocialUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: SocialScalarWhereInput | SocialScalarWhereInput[]
  }

  export type ContactCreateNestedOneWithoutSocialInput = {
    create?: XOR<ContactCreateWithoutSocialInput, ContactUncheckedCreateWithoutSocialInput>
    connectOrCreate?: ContactCreateOrConnectWithoutSocialInput
    connect?: ContactWhereUniqueInput
  }

  export type ContactUpdateOneRequiredWithoutSocialNestedInput = {
    create?: XOR<ContactCreateWithoutSocialInput, ContactUncheckedCreateWithoutSocialInput>
    connectOrCreate?: ContactCreateOrConnectWithoutSocialInput
    upsert?: ContactUpsertWithoutSocialInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutSocialInput, ContactUpdateWithoutSocialInput>, ContactUncheckedUpdateWithoutSocialInput>
  }

  export type ResumeCreateNestedOneWithoutEducationInput = {
    create?: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationInput
    upsert?: ResumeUpsertWithoutEducationInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutEducationInput, ResumeUpdateWithoutEducationInput>, ResumeUncheckedUpdateWithoutEducationInput>
  }

  export type ResumeCreateNestedOneWithoutWorkInput = {
    create?: XOR<ResumeCreateWithoutWorkInput, ResumeUncheckedCreateWithoutWorkInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorkInput
    connect?: ResumeWhereUniqueInput
  }

  export type WorkTasksCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput> | WorkTasksCreateWithoutWorkInput[] | WorkTasksUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTasksCreateOrConnectWithoutWorkInput | WorkTasksCreateOrConnectWithoutWorkInput[]
    createMany?: WorkTasksCreateManyWorkInputEnvelope
    connect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
  }

  export type WorkBadgeCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput> | WorkBadgeCreateWithoutWorkInput[] | WorkBadgeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkBadgeCreateOrConnectWithoutWorkInput | WorkBadgeCreateOrConnectWithoutWorkInput[]
    createMany?: WorkBadgeCreateManyWorkInputEnvelope
    connect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
  }

  export type WorkTasksUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput> | WorkTasksCreateWithoutWorkInput[] | WorkTasksUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTasksCreateOrConnectWithoutWorkInput | WorkTasksCreateOrConnectWithoutWorkInput[]
    createMany?: WorkTasksCreateManyWorkInputEnvelope
    connect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
  }

  export type WorkBadgeUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput> | WorkBadgeCreateWithoutWorkInput[] | WorkBadgeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkBadgeCreateOrConnectWithoutWorkInput | WorkBadgeCreateOrConnectWithoutWorkInput[]
    createMany?: WorkBadgeCreateManyWorkInputEnvelope
    connect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
  }

  export type ResumeUpdateOneRequiredWithoutWorkNestedInput = {
    create?: XOR<ResumeCreateWithoutWorkInput, ResumeUncheckedCreateWithoutWorkInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorkInput
    upsert?: ResumeUpsertWithoutWorkInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutWorkInput, ResumeUpdateWithoutWorkInput>, ResumeUncheckedUpdateWithoutWorkInput>
  }

  export type WorkTasksUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput> | WorkTasksCreateWithoutWorkInput[] | WorkTasksUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTasksCreateOrConnectWithoutWorkInput | WorkTasksCreateOrConnectWithoutWorkInput[]
    upsert?: WorkTasksUpsertWithWhereUniqueWithoutWorkInput | WorkTasksUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkTasksCreateManyWorkInputEnvelope
    set?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    disconnect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    delete?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    connect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    update?: WorkTasksUpdateWithWhereUniqueWithoutWorkInput | WorkTasksUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkTasksUpdateManyWithWhereWithoutWorkInput | WorkTasksUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkTasksScalarWhereInput | WorkTasksScalarWhereInput[]
  }

  export type WorkBadgeUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput> | WorkBadgeCreateWithoutWorkInput[] | WorkBadgeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkBadgeCreateOrConnectWithoutWorkInput | WorkBadgeCreateOrConnectWithoutWorkInput[]
    upsert?: WorkBadgeUpsertWithWhereUniqueWithoutWorkInput | WorkBadgeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkBadgeCreateManyWorkInputEnvelope
    set?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    disconnect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    delete?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    connect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    update?: WorkBadgeUpdateWithWhereUniqueWithoutWorkInput | WorkBadgeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkBadgeUpdateManyWithWhereWithoutWorkInput | WorkBadgeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkBadgeScalarWhereInput | WorkBadgeScalarWhereInput[]
  }

  export type WorkTasksUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput> | WorkTasksCreateWithoutWorkInput[] | WorkTasksUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkTasksCreateOrConnectWithoutWorkInput | WorkTasksCreateOrConnectWithoutWorkInput[]
    upsert?: WorkTasksUpsertWithWhereUniqueWithoutWorkInput | WorkTasksUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkTasksCreateManyWorkInputEnvelope
    set?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    disconnect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    delete?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    connect?: WorkTasksWhereUniqueInput | WorkTasksWhereUniqueInput[]
    update?: WorkTasksUpdateWithWhereUniqueWithoutWorkInput | WorkTasksUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkTasksUpdateManyWithWhereWithoutWorkInput | WorkTasksUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkTasksScalarWhereInput | WorkTasksScalarWhereInput[]
  }

  export type WorkBadgeUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput> | WorkBadgeCreateWithoutWorkInput[] | WorkBadgeUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: WorkBadgeCreateOrConnectWithoutWorkInput | WorkBadgeCreateOrConnectWithoutWorkInput[]
    upsert?: WorkBadgeUpsertWithWhereUniqueWithoutWorkInput | WorkBadgeUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: WorkBadgeCreateManyWorkInputEnvelope
    set?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    disconnect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    delete?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    connect?: WorkBadgeWhereUniqueInput | WorkBadgeWhereUniqueInput[]
    update?: WorkBadgeUpdateWithWhereUniqueWithoutWorkInput | WorkBadgeUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: WorkBadgeUpdateManyWithWhereWithoutWorkInput | WorkBadgeUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: WorkBadgeScalarWhereInput | WorkBadgeScalarWhereInput[]
  }

  export type WorkCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkCreateWithoutTasksInput, WorkUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkCreateOrConnectWithoutTasksInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkCreateWithoutTasksInput, WorkUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkCreateOrConnectWithoutTasksInput
    upsert?: WorkUpsertWithoutTasksInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutTasksInput, WorkUpdateWithoutTasksInput>, WorkUncheckedUpdateWithoutTasksInput>
  }

  export type WorkCreateNestedOneWithoutBadgesInput = {
    create?: XOR<WorkCreateWithoutBadgesInput, WorkUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutBadgesInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<WorkCreateWithoutBadgesInput, WorkUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutBadgesInput
    upsert?: WorkUpsertWithoutBadgesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutBadgesInput, WorkUpdateWithoutBadgesInput>, WorkUncheckedUpdateWithoutBadgesInput>
  }

  export type ResumeCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSkillsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSkillsInput
    upsert?: ResumeUpsertWithoutSkillsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSkillsInput, ResumeUpdateWithoutSkillsInput>, ResumeUncheckedUpdateWithoutSkillsInput>
  }

  export type ResumeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ProjectTechCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
  }

  export type ProjectLinkCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput
    connect?: ProjectLinkWhereUniqueInput
  }

  export type ProjectTechUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
  }

  export type ProjectLinkUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput
    connect?: ProjectLinkWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    upsert?: ResumeUpsertWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutProjectsInput, ResumeUpdateWithoutProjectsInput>, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectTechUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechUpsertWithWhereUniqueWithoutProjectInput | ProjectTechUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    set?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    disconnect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    delete?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    update?: ProjectTechUpdateWithWhereUniqueWithoutProjectInput | ProjectTechUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechUpdateManyWithWhereWithoutProjectInput | ProjectTechUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
  }

  export type ProjectLinkUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput
    upsert?: ProjectLinkUpsertWithoutProjectInput
    disconnect?: ProjectLinkWhereInput | boolean
    delete?: ProjectLinkWhereInput | boolean
    connect?: ProjectLinkWhereUniqueInput
    update?: XOR<XOR<ProjectLinkUpdateToOneWithWhereWithoutProjectInput, ProjectLinkUpdateWithoutProjectInput>, ProjectLinkUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTechUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput> | ProjectTechCreateWithoutProjectInput[] | ProjectTechUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTechCreateOrConnectWithoutProjectInput | ProjectTechCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTechUpsertWithWhereUniqueWithoutProjectInput | ProjectTechUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechCreateManyProjectInputEnvelope
    set?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    disconnect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    delete?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    connect?: ProjectTechWhereUniqueInput | ProjectTechWhereUniqueInput[]
    update?: ProjectTechUpdateWithWhereUniqueWithoutProjectInput | ProjectTechUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTechUpdateManyWithWhereWithoutProjectInput | ProjectTechUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
  }

  export type ProjectLinkUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectLinkCreateOrConnectWithoutProjectInput
    upsert?: ProjectLinkUpsertWithoutProjectInput
    disconnect?: ProjectLinkWhereInput | boolean
    delete?: ProjectLinkWhereInput | boolean
    connect?: ProjectLinkWhereUniqueInput
    update?: XOR<XOR<ProjectLinkUpdateToOneWithWhereWithoutProjectInput, ProjectLinkUpdateWithoutProjectInput>, ProjectLinkUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCreateNestedOneWithoutTechStackInput = {
    create?: XOR<ProjectCreateWithoutTechStackInput, ProjectUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechStackInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechStackNestedInput = {
    create?: XOR<ProjectCreateWithoutTechStackInput, ProjectUncheckedCreateWithoutTechStackInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechStackInput
    upsert?: ProjectUpsertWithoutTechStackInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTechStackInput, ProjectUpdateWithoutTechStackInput>, ProjectUncheckedUpdateWithoutTechStackInput>
  }

  export type ProjectCreateNestedOneWithoutLinkInput = {
    create?: XOR<ProjectCreateWithoutLinkInput, ProjectUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLinkInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLinkNestedInput = {
    create?: XOR<ProjectCreateWithoutLinkInput, ProjectUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLinkInput
    upsert?: ProjectUpsertWithoutLinkInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLinkInput, ProjectUpdateWithoutLinkInput>, ProjectUncheckedUpdateWithoutLinkInput>
  }

  export type ResumeCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationsInput, ResumeUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type AiRefinementCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput> | AiRefinementCreateWithoutJobApplicationInput[] | AiRefinementUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutJobApplicationInput | AiRefinementCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AiRefinementCreateManyJobApplicationInputEnvelope
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
  }

  export type AiRefinementUncheckedCreateNestedManyWithoutJobApplicationInput = {
    create?: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput> | AiRefinementCreateWithoutJobApplicationInput[] | AiRefinementUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutJobApplicationInput | AiRefinementCreateOrConnectWithoutJobApplicationInput[]
    createMany?: AiRefinementCreateManyJobApplicationInputEnvelope
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
  }

  export type ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<ResumeCreateWithoutJobApplicationsInput, ResumeUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutJobApplicationsInput
    upsert?: ResumeUpsertWithoutJobApplicationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutJobApplicationsInput, ResumeUpdateWithoutJobApplicationsInput>, ResumeUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type AiRefinementUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput> | AiRefinementCreateWithoutJobApplicationInput[] | AiRefinementUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutJobApplicationInput | AiRefinementCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AiRefinementUpsertWithWhereUniqueWithoutJobApplicationInput | AiRefinementUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AiRefinementCreateManyJobApplicationInputEnvelope
    set?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    disconnect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    delete?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    update?: AiRefinementUpdateWithWhereUniqueWithoutJobApplicationInput | AiRefinementUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AiRefinementUpdateManyWithWhereWithoutJobApplicationInput | AiRefinementUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
  }

  export type AiRefinementUncheckedUpdateManyWithoutJobApplicationNestedInput = {
    create?: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput> | AiRefinementCreateWithoutJobApplicationInput[] | AiRefinementUncheckedCreateWithoutJobApplicationInput[]
    connectOrCreate?: AiRefinementCreateOrConnectWithoutJobApplicationInput | AiRefinementCreateOrConnectWithoutJobApplicationInput[]
    upsert?: AiRefinementUpsertWithWhereUniqueWithoutJobApplicationInput | AiRefinementUpsertWithWhereUniqueWithoutJobApplicationInput[]
    createMany?: AiRefinementCreateManyJobApplicationInputEnvelope
    set?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    disconnect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    delete?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    connect?: AiRefinementWhereUniqueInput | AiRefinementWhereUniqueInput[]
    update?: AiRefinementUpdateWithWhereUniqueWithoutJobApplicationInput | AiRefinementUpdateWithWhereUniqueWithoutJobApplicationInput[]
    updateMany?: AiRefinementUpdateManyWithWhereWithoutJobApplicationInput | AiRefinementUpdateManyWithWhereWithoutJobApplicationInput[]
    deleteMany?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutAiRefinementsInput = {
    create?: XOR<ResumeCreateWithoutAiRefinementsInput, ResumeUncheckedCreateWithoutAiRefinementsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAiRefinementsInput
    connect?: ResumeWhereUniqueInput
  }

  export type JobApplicationCreateNestedOneWithoutAiRefinementsInput = {
    create?: XOR<JobApplicationCreateWithoutAiRefinementsInput, JobApplicationUncheckedCreateWithoutAiRefinementsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAiRefinementsInput
    connect?: JobApplicationWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutAiRefinementsNestedInput = {
    create?: XOR<ResumeCreateWithoutAiRefinementsInput, ResumeUncheckedCreateWithoutAiRefinementsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutAiRefinementsInput
    upsert?: ResumeUpsertWithoutAiRefinementsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutAiRefinementsInput, ResumeUpdateWithoutAiRefinementsInput>, ResumeUncheckedUpdateWithoutAiRefinementsInput>
  }

  export type JobApplicationUpdateOneRequiredWithoutAiRefinementsNestedInput = {
    create?: XOR<JobApplicationCreateWithoutAiRefinementsInput, JobApplicationUncheckedCreateWithoutAiRefinementsInput>
    connectOrCreate?: JobApplicationCreateOrConnectWithoutAiRefinementsInput
    upsert?: JobApplicationUpsertWithoutAiRefinementsInput
    connect?: JobApplicationWhereUniqueInput
    update?: XOR<XOR<JobApplicationUpdateToOneWithWhereWithoutAiRefinementsInput, JobApplicationUpdateWithoutAiRefinementsInput>, JobApplicationUncheckedUpdateWithoutAiRefinementsInput>
  }

  export type ResumeCreateNestedOneWithoutOpenAiResponsesInput = {
    create?: XOR<ResumeCreateWithoutOpenAiResponsesInput, ResumeUncheckedCreateWithoutOpenAiResponsesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutOpenAiResponsesInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutOpenAiResponsesNestedInput = {
    create?: XOR<ResumeCreateWithoutOpenAiResponsesInput, ResumeUncheckedCreateWithoutOpenAiResponsesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutOpenAiResponsesInput
    upsert?: ResumeUpsertWithoutOpenAiResponsesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutOpenAiResponsesInput, ResumeUpdateWithoutOpenAiResponsesInput>, ResumeUncheckedUpdateWithoutOpenAiResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    userId?: StringNullableFilter<"Resume"> | string | null
    name?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    initials?: StringNullableFilter<"Resume"> | string | null
    location?: StringNullableFilter<"Resume"> | string | null
    locationLink?: StringNullableFilter<"Resume"> | string | null
    about?: StringNullableFilter<"Resume"> | string | null
    summary?: StringNullableFilter<"Resume"> | string | null
    avatarUrl?: StringNullableFilter<"Resume"> | string | null
    personalWebsiteUrl?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
  }

  export type UserCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCallsLimit?: number
  }

  export type UserUncheckedCreateWithoutResumesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCallsLimit?: number
  }

  export type UserCreateOrConnectWithoutResumesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
  }

  export type ContactCreateWithoutResumeInput = {
    id?: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    social?: SocialCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutResumeInput = {
    id?: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    social?: SocialUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutResumeInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
  }

  export type EducationCreateWithoutResumeInput = {
    id?: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutResumeInput = {
    id?: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutResumeInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationCreateManyResumeInputEnvelope = {
    data: EducationCreateManyResumeInput | EducationCreateManyResumeInput[]
  }

  export type WorkCreateWithoutResumeInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: WorkTasksCreateNestedManyWithoutWorkInput
    badges?: WorkBadgeCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutResumeInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: WorkTasksUncheckedCreateNestedManyWithoutWorkInput
    badges?: WorkBadgeUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutResumeInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput>
  }

  export type WorkCreateManyResumeInputEnvelope = {
    data: WorkCreateManyResumeInput | WorkCreateManyResumeInput[]
  }

  export type SkillCreateWithoutResumeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutResumeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutResumeInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput>
  }

  export type SkillCreateManyResumeInputEnvelope = {
    data: SkillCreateManyResumeInput | SkillCreateManyResumeInput[]
  }

  export type ProjectCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techStack?: ProjectTechCreateNestedManyWithoutProjectInput
    link?: ProjectLinkCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techStack?: ProjectTechUncheckedCreateNestedManyWithoutProjectInput
    link?: ProjectLinkUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectCreateManyResumeInputEnvelope = {
    data: ProjectCreateManyResumeInput | ProjectCreateManyResumeInput[]
  }

  export type JobApplicationCreateWithoutResumeInput = {
    id?: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRefinements?: AiRefinementCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationUncheckedCreateWithoutResumeInput = {
    id?: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutJobApplicationInput
  }

  export type JobApplicationCreateOrConnectWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
  }

  export type JobApplicationCreateManyResumeInputEnvelope = {
    data: JobApplicationCreateManyResumeInput | JobApplicationCreateManyResumeInput[]
  }

  export type AiRefinementCreateWithoutResumeInput = {
    id?: string
    refinements: string
    createdAt?: Date | string
    jobApplication: JobApplicationCreateNestedOneWithoutAiRefinementsInput
  }

  export type AiRefinementUncheckedCreateWithoutResumeInput = {
    id?: string
    jobApplicationId: string
    refinements: string
    createdAt?: Date | string
  }

  export type AiRefinementCreateOrConnectWithoutResumeInput = {
    where: AiRefinementWhereUniqueInput
    create: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput>
  }

  export type AiRefinementCreateManyResumeInputEnvelope = {
    data: AiRefinementCreateManyResumeInput | AiRefinementCreateManyResumeInput[]
  }

  export type OpenAiResponseCreateWithoutResumeInput = {
    id?: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type OpenAiResponseUncheckedCreateWithoutResumeInput = {
    id?: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type OpenAiResponseCreateOrConnectWithoutResumeInput = {
    where: OpenAiResponseWhereUniqueInput
    create: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput>
  }

  export type OpenAiResponseCreateManyResumeInputEnvelope = {
    data: OpenAiResponseCreateManyResumeInput | OpenAiResponseCreateManyResumeInput[]
  }

  export type UserUpsertWithoutResumesInput = {
    update: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
    create: XOR<UserCreateWithoutResumesInput, UserUncheckedCreateWithoutResumesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumesInput, UserUncheckedUpdateWithoutResumesInput>
  }

  export type UserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCallsLimit?: IntFieldUpdateOperationsInput | number
  }

  export type ContactUpsertWithoutResumeInput = {
    update: XOR<ContactUpdateWithoutResumeInput, ContactUncheckedUpdateWithoutResumeInput>
    create: XOR<ContactCreateWithoutResumeInput, ContactUncheckedCreateWithoutResumeInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutResumeInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutResumeInput, ContactUncheckedUpdateWithoutResumeInput>
  }

  export type ContactUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    social?: SocialUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    social?: SocialUncheckedUpdateManyWithoutContactNestedInput
  }

  export type EducationUpsertWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
  }

  export type EducationUpdateManyWithWhereWithoutResumeInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutResumeInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    resumeId?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    start?: StringFilter<"Education"> | string
    end?: StringFilter<"Education"> | string
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
  }

  export type WorkUpsertWithWhereUniqueWithoutResumeInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutResumeInput, WorkUncheckedUpdateWithoutResumeInput>
    create: XOR<WorkCreateWithoutResumeInput, WorkUncheckedCreateWithoutResumeInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutResumeInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutResumeInput, WorkUncheckedUpdateWithoutResumeInput>
  }

  export type WorkUpdateManyWithWhereWithoutResumeInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutResumeInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: StringFilter<"Work"> | string
    resumeId?: StringFilter<"Work"> | string
    company?: StringFilter<"Work"> | string
    link?: StringNullableFilter<"Work"> | string | null
    title?: StringFilter<"Work"> | string
    start?: StringFilter<"Work"> | string
    end?: StringNullableFilter<"Work"> | string | null
    description?: StringFilter<"Work"> | string
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
  }

  export type SkillUpsertWithWhereUniqueWithoutResumeInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutResumeInput, SkillUncheckedUpdateWithoutResumeInput>
    create: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutResumeInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutResumeInput, SkillUncheckedUpdateWithoutResumeInput>
  }

  export type SkillUpdateManyWithWhereWithoutResumeInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutResumeInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    resumeId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
  }

  export type ProjectUpdateManyWithWhereWithoutResumeInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutResumeInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    resumeId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
    create: XOR<JobApplicationCreateWithoutResumeInput, JobApplicationUncheckedCreateWithoutResumeInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutResumeInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutResumeInput, JobApplicationUncheckedUpdateWithoutResumeInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutResumeInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutResumeInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    resumeId?: StringFilter<"JobApplication"> | string
    company?: StringFilter<"JobApplication"> | string
    position?: StringFilter<"JobApplication"> | string
    status?: StringFilter<"JobApplication"> | string
    appliedDate?: DateTimeFilter<"JobApplication"> | Date | string
    jobUrl?: StringNullableFilter<"JobApplication"> | string | null
    jobDescription?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type AiRefinementUpsertWithWhereUniqueWithoutResumeInput = {
    where: AiRefinementWhereUniqueInput
    update: XOR<AiRefinementUpdateWithoutResumeInput, AiRefinementUncheckedUpdateWithoutResumeInput>
    create: XOR<AiRefinementCreateWithoutResumeInput, AiRefinementUncheckedCreateWithoutResumeInput>
  }

  export type AiRefinementUpdateWithWhereUniqueWithoutResumeInput = {
    where: AiRefinementWhereUniqueInput
    data: XOR<AiRefinementUpdateWithoutResumeInput, AiRefinementUncheckedUpdateWithoutResumeInput>
  }

  export type AiRefinementUpdateManyWithWhereWithoutResumeInput = {
    where: AiRefinementScalarWhereInput
    data: XOR<AiRefinementUpdateManyMutationInput, AiRefinementUncheckedUpdateManyWithoutResumeInput>
  }

  export type AiRefinementScalarWhereInput = {
    AND?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
    OR?: AiRefinementScalarWhereInput[]
    NOT?: AiRefinementScalarWhereInput | AiRefinementScalarWhereInput[]
    id?: StringFilter<"AiRefinement"> | string
    resumeId?: StringFilter<"AiRefinement"> | string
    jobApplicationId?: StringFilter<"AiRefinement"> | string
    refinements?: StringFilter<"AiRefinement"> | string
    createdAt?: DateTimeFilter<"AiRefinement"> | Date | string
  }

  export type OpenAiResponseUpsertWithWhereUniqueWithoutResumeInput = {
    where: OpenAiResponseWhereUniqueInput
    update: XOR<OpenAiResponseUpdateWithoutResumeInput, OpenAiResponseUncheckedUpdateWithoutResumeInput>
    create: XOR<OpenAiResponseCreateWithoutResumeInput, OpenAiResponseUncheckedCreateWithoutResumeInput>
  }

  export type OpenAiResponseUpdateWithWhereUniqueWithoutResumeInput = {
    where: OpenAiResponseWhereUniqueInput
    data: XOR<OpenAiResponseUpdateWithoutResumeInput, OpenAiResponseUncheckedUpdateWithoutResumeInput>
  }

  export type OpenAiResponseUpdateManyWithWhereWithoutResumeInput = {
    where: OpenAiResponseScalarWhereInput
    data: XOR<OpenAiResponseUpdateManyMutationInput, OpenAiResponseUncheckedUpdateManyWithoutResumeInput>
  }

  export type OpenAiResponseScalarWhereInput = {
    AND?: OpenAiResponseScalarWhereInput | OpenAiResponseScalarWhereInput[]
    OR?: OpenAiResponseScalarWhereInput[]
    NOT?: OpenAiResponseScalarWhereInput | OpenAiResponseScalarWhereInput[]
    id?: StringFilter<"OpenAiResponse"> | string
    resumeId?: StringFilter<"OpenAiResponse"> | string
    prompt?: StringFilter<"OpenAiResponse"> | string
    response?: StringFilter<"OpenAiResponse"> | string
    createdAt?: DateTimeFilter<"OpenAiResponse"> | Date | string
  }

  export type ResumeCreateWithoutContactInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutContactInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutContactInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutContactInput, ResumeUncheckedCreateWithoutContactInput>
  }

  export type SocialCreateWithoutContactInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUncheckedCreateWithoutContactInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialCreateOrConnectWithoutContactInput = {
    where: SocialWhereUniqueInput
    create: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput>
  }

  export type SocialCreateManyContactInputEnvelope = {
    data: SocialCreateManyContactInput | SocialCreateManyContactInput[]
  }

  export type ResumeUpsertWithoutContactInput = {
    update: XOR<ResumeUpdateWithoutContactInput, ResumeUncheckedUpdateWithoutContactInput>
    create: XOR<ResumeCreateWithoutContactInput, ResumeUncheckedCreateWithoutContactInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutContactInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutContactInput, ResumeUncheckedUpdateWithoutContactInput>
  }

  export type ResumeUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type SocialUpsertWithWhereUniqueWithoutContactInput = {
    where: SocialWhereUniqueInput
    update: XOR<SocialUpdateWithoutContactInput, SocialUncheckedUpdateWithoutContactInput>
    create: XOR<SocialCreateWithoutContactInput, SocialUncheckedCreateWithoutContactInput>
  }

  export type SocialUpdateWithWhereUniqueWithoutContactInput = {
    where: SocialWhereUniqueInput
    data: XOR<SocialUpdateWithoutContactInput, SocialUncheckedUpdateWithoutContactInput>
  }

  export type SocialUpdateManyWithWhereWithoutContactInput = {
    where: SocialScalarWhereInput
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyWithoutContactInput>
  }

  export type SocialScalarWhereInput = {
    AND?: SocialScalarWhereInput | SocialScalarWhereInput[]
    OR?: SocialScalarWhereInput[]
    NOT?: SocialScalarWhereInput | SocialScalarWhereInput[]
    id?: StringFilter<"Social"> | string
    contactId?: StringFilter<"Social"> | string
    name?: StringFilter<"Social"> | string
    url?: StringFilter<"Social"> | string
    createdAt?: DateTimeFilter<"Social"> | Date | string
    updatedAt?: DateTimeFilter<"Social"> | Date | string
  }

  export type ContactCreateWithoutSocialInput = {
    id?: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutSocialInput = {
    id?: string
    resumeId: string
    email: string
    tel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutSocialInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutSocialInput, ContactUncheckedCreateWithoutSocialInput>
  }

  export type ContactUpsertWithoutSocialInput = {
    update: XOR<ContactUpdateWithoutSocialInput, ContactUncheckedUpdateWithoutSocialInput>
    create: XOR<ContactCreateWithoutSocialInput, ContactUncheckedCreateWithoutSocialInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutSocialInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutSocialInput, ContactUncheckedUpdateWithoutSocialInput>
  }

  export type ContactUpdateWithoutSocialInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutSocialInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateWithoutEducationInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutEducationInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutEducationInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
  }

  export type ResumeUpsertWithoutEducationInput = {
    update: XOR<ResumeUpdateWithoutEducationInput, ResumeUncheckedUpdateWithoutEducationInput>
    create: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutEducationInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutEducationInput, ResumeUncheckedUpdateWithoutEducationInput>
  }

  export type ResumeUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutWorkInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutWorkInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutWorkInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutWorkInput, ResumeUncheckedCreateWithoutWorkInput>
  }

  export type WorkTasksCreateWithoutWorkInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTasksUncheckedCreateWithoutWorkInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTasksCreateOrConnectWithoutWorkInput = {
    where: WorkTasksWhereUniqueInput
    create: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput>
  }

  export type WorkTasksCreateManyWorkInputEnvelope = {
    data: WorkTasksCreateManyWorkInput | WorkTasksCreateManyWorkInput[]
  }

  export type WorkBadgeCreateWithoutWorkInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkBadgeUncheckedCreateWithoutWorkInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkBadgeCreateOrConnectWithoutWorkInput = {
    where: WorkBadgeWhereUniqueInput
    create: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput>
  }

  export type WorkBadgeCreateManyWorkInputEnvelope = {
    data: WorkBadgeCreateManyWorkInput | WorkBadgeCreateManyWorkInput[]
  }

  export type ResumeUpsertWithoutWorkInput = {
    update: XOR<ResumeUpdateWithoutWorkInput, ResumeUncheckedUpdateWithoutWorkInput>
    create: XOR<ResumeCreateWithoutWorkInput, ResumeUncheckedCreateWithoutWorkInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutWorkInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutWorkInput, ResumeUncheckedUpdateWithoutWorkInput>
  }

  export type ResumeUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type WorkTasksUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkTasksWhereUniqueInput
    update: XOR<WorkTasksUpdateWithoutWorkInput, WorkTasksUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkTasksCreateWithoutWorkInput, WorkTasksUncheckedCreateWithoutWorkInput>
  }

  export type WorkTasksUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkTasksWhereUniqueInput
    data: XOR<WorkTasksUpdateWithoutWorkInput, WorkTasksUncheckedUpdateWithoutWorkInput>
  }

  export type WorkTasksUpdateManyWithWhereWithoutWorkInput = {
    where: WorkTasksScalarWhereInput
    data: XOR<WorkTasksUpdateManyMutationInput, WorkTasksUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkTasksScalarWhereInput = {
    AND?: WorkTasksScalarWhereInput | WorkTasksScalarWhereInput[]
    OR?: WorkTasksScalarWhereInput[]
    NOT?: WorkTasksScalarWhereInput | WorkTasksScalarWhereInput[]
    id?: StringFilter<"WorkTasks"> | string
    workId?: StringFilter<"WorkTasks"> | string
    description?: StringFilter<"WorkTasks"> | string
    createdAt?: DateTimeFilter<"WorkTasks"> | Date | string
    updatedAt?: DateTimeFilter<"WorkTasks"> | Date | string
  }

  export type WorkBadgeUpsertWithWhereUniqueWithoutWorkInput = {
    where: WorkBadgeWhereUniqueInput
    update: XOR<WorkBadgeUpdateWithoutWorkInput, WorkBadgeUncheckedUpdateWithoutWorkInput>
    create: XOR<WorkBadgeCreateWithoutWorkInput, WorkBadgeUncheckedCreateWithoutWorkInput>
  }

  export type WorkBadgeUpdateWithWhereUniqueWithoutWorkInput = {
    where: WorkBadgeWhereUniqueInput
    data: XOR<WorkBadgeUpdateWithoutWorkInput, WorkBadgeUncheckedUpdateWithoutWorkInput>
  }

  export type WorkBadgeUpdateManyWithWhereWithoutWorkInput = {
    where: WorkBadgeScalarWhereInput
    data: XOR<WorkBadgeUpdateManyMutationInput, WorkBadgeUncheckedUpdateManyWithoutWorkInput>
  }

  export type WorkBadgeScalarWhereInput = {
    AND?: WorkBadgeScalarWhereInput | WorkBadgeScalarWhereInput[]
    OR?: WorkBadgeScalarWhereInput[]
    NOT?: WorkBadgeScalarWhereInput | WorkBadgeScalarWhereInput[]
    id?: StringFilter<"WorkBadge"> | string
    workId?: StringFilter<"WorkBadge"> | string
    name?: StringFilter<"WorkBadge"> | string
    createdAt?: DateTimeFilter<"WorkBadge"> | Date | string
    updatedAt?: DateTimeFilter<"WorkBadge"> | Date | string
  }

  export type WorkCreateWithoutTasksInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutWorkInput
    badges?: WorkBadgeCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutTasksInput = {
    id?: string
    resumeId: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    badges?: WorkBadgeUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutTasksInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutTasksInput, WorkUncheckedCreateWithoutTasksInput>
  }

  export type WorkUpsertWithoutTasksInput = {
    update: XOR<WorkUpdateWithoutTasksInput, WorkUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkCreateWithoutTasksInput, WorkUncheckedCreateWithoutTasksInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutTasksInput, WorkUncheckedUpdateWithoutTasksInput>
  }

  export type WorkUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutWorkNestedInput
    badges?: WorkBadgeUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badges?: WorkBadgeUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateWithoutBadgesInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutWorkInput
    tasks?: WorkTasksCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutBadgesInput = {
    id?: string
    resumeId: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: WorkTasksUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutBadgesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutBadgesInput, WorkUncheckedCreateWithoutBadgesInput>
  }

  export type WorkUpsertWithoutBadgesInput = {
    update: XOR<WorkUpdateWithoutBadgesInput, WorkUncheckedUpdateWithoutBadgesInput>
    create: XOR<WorkCreateWithoutBadgesInput, WorkUncheckedCreateWithoutBadgesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutBadgesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutBadgesInput, WorkUncheckedUpdateWithoutBadgesInput>
  }

  export type WorkUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutWorkNestedInput
    tasks?: WorkTasksUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: WorkTasksUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type ResumeCreateWithoutSkillsInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSkillsInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSkillsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
  }

  export type ResumeUpsertWithoutSkillsInput = {
    update: XOR<ResumeUpdateWithoutSkillsInput, ResumeUncheckedUpdateWithoutSkillsInput>
    create: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSkillsInput, ResumeUncheckedUpdateWithoutSkillsInput>
  }

  export type ResumeUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutProjectsInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutProjectsInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutProjectsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectTechCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechCreateOrConnectWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    create: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechCreateManyProjectInputEnvelope = {
    data: ProjectTechCreateManyProjectInput | ProjectTechCreateManyProjectInput[]
  }

  export type ProjectLinkCreateWithoutProjectInput = {
    id?: string
    label: string
    href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectLinkUncheckedCreateWithoutProjectInput = {
    id?: string
    label: string
    href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectLinkCreateOrConnectWithoutProjectInput = {
    where: ProjectLinkWhereUniqueInput
    create: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
  }

  export type ResumeUpsertWithoutProjectsInput = {
    update: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ProjectTechUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    update: XOR<ProjectTechUpdateWithoutProjectInput, ProjectTechUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTechCreateWithoutProjectInput, ProjectTechUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTechUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechWhereUniqueInput
    data: XOR<ProjectTechUpdateWithoutProjectInput, ProjectTechUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTechUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTechScalarWhereInput
    data: XOR<ProjectTechUpdateManyMutationInput, ProjectTechUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTechScalarWhereInput = {
    AND?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
    OR?: ProjectTechScalarWhereInput[]
    NOT?: ProjectTechScalarWhereInput | ProjectTechScalarWhereInput[]
    id?: StringFilter<"ProjectTech"> | string
    projectId?: StringFilter<"ProjectTech"> | string
    name?: StringFilter<"ProjectTech"> | string
    createdAt?: DateTimeFilter<"ProjectTech"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTech"> | Date | string
  }

  export type ProjectLinkUpsertWithoutProjectInput = {
    update: XOR<ProjectLinkUpdateWithoutProjectInput, ProjectLinkUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectLinkCreateWithoutProjectInput, ProjectLinkUncheckedCreateWithoutProjectInput>
    where?: ProjectLinkWhereInput
  }

  export type ProjectLinkUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectLinkWhereInput
    data: XOR<ProjectLinkUpdateWithoutProjectInput, ProjectLinkUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectLinkUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectLinkUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutTechStackInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutProjectsInput
    link?: ProjectLinkCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTechStackInput = {
    id?: string
    resumeId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    link?: ProjectLinkUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTechStackInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechStackInput, ProjectUncheckedCreateWithoutTechStackInput>
  }

  export type ProjectUpsertWithoutTechStackInput = {
    update: XOR<ProjectUpdateWithoutTechStackInput, ProjectUncheckedUpdateWithoutTechStackInput>
    create: XOR<ProjectCreateWithoutTechStackInput, ProjectUncheckedCreateWithoutTechStackInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechStackInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechStackInput, ProjectUncheckedUpdateWithoutTechStackInput>
  }

  export type ProjectUpdateWithoutTechStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutProjectsNestedInput
    link?: ProjectLinkUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechStackInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: ProjectLinkUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutLinkInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutProjectsInput
    techStack?: ProjectTechCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLinkInput = {
    id?: string
    resumeId: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    techStack?: ProjectTechUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLinkInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLinkInput, ProjectUncheckedCreateWithoutLinkInput>
  }

  export type ProjectUpsertWithoutLinkInput = {
    update: XOR<ProjectUpdateWithoutLinkInput, ProjectUncheckedUpdateWithoutLinkInput>
    create: XOR<ProjectCreateWithoutLinkInput, ProjectUncheckedCreateWithoutLinkInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLinkInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLinkInput, ProjectUncheckedUpdateWithoutLinkInput>
  }

  export type ProjectUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutProjectsNestedInput
    techStack?: ProjectTechUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: ProjectTechUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ResumeCreateWithoutJobApplicationsInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutJobApplicationsInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutJobApplicationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutJobApplicationsInput, ResumeUncheckedCreateWithoutJobApplicationsInput>
  }

  export type AiRefinementCreateWithoutJobApplicationInput = {
    id?: string
    refinements: string
    createdAt?: Date | string
    resume: ResumeCreateNestedOneWithoutAiRefinementsInput
  }

  export type AiRefinementUncheckedCreateWithoutJobApplicationInput = {
    id?: string
    resumeId: string
    refinements: string
    createdAt?: Date | string
  }

  export type AiRefinementCreateOrConnectWithoutJobApplicationInput = {
    where: AiRefinementWhereUniqueInput
    create: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput>
  }

  export type AiRefinementCreateManyJobApplicationInputEnvelope = {
    data: AiRefinementCreateManyJobApplicationInput | AiRefinementCreateManyJobApplicationInput[]
  }

  export type ResumeUpsertWithoutJobApplicationsInput = {
    update: XOR<ResumeUpdateWithoutJobApplicationsInput, ResumeUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<ResumeCreateWithoutJobApplicationsInput, ResumeUncheckedCreateWithoutJobApplicationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutJobApplicationsInput, ResumeUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type ResumeUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutJobApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type AiRefinementUpsertWithWhereUniqueWithoutJobApplicationInput = {
    where: AiRefinementWhereUniqueInput
    update: XOR<AiRefinementUpdateWithoutJobApplicationInput, AiRefinementUncheckedUpdateWithoutJobApplicationInput>
    create: XOR<AiRefinementCreateWithoutJobApplicationInput, AiRefinementUncheckedCreateWithoutJobApplicationInput>
  }

  export type AiRefinementUpdateWithWhereUniqueWithoutJobApplicationInput = {
    where: AiRefinementWhereUniqueInput
    data: XOR<AiRefinementUpdateWithoutJobApplicationInput, AiRefinementUncheckedUpdateWithoutJobApplicationInput>
  }

  export type AiRefinementUpdateManyWithWhereWithoutJobApplicationInput = {
    where: AiRefinementScalarWhereInput
    data: XOR<AiRefinementUpdateManyMutationInput, AiRefinementUncheckedUpdateManyWithoutJobApplicationInput>
  }

  export type ResumeCreateWithoutAiRefinementsInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutAiRefinementsInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    openAiResponses?: OpenAiResponseUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutAiRefinementsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutAiRefinementsInput, ResumeUncheckedCreateWithoutAiRefinementsInput>
  }

  export type JobApplicationCreateWithoutAiRefinementsInput = {
    id?: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutAiRefinementsInput = {
    id?: string
    resumeId: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutAiRefinementsInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutAiRefinementsInput, JobApplicationUncheckedCreateWithoutAiRefinementsInput>
  }

  export type ResumeUpsertWithoutAiRefinementsInput = {
    update: XOR<ResumeUpdateWithoutAiRefinementsInput, ResumeUncheckedUpdateWithoutAiRefinementsInput>
    create: XOR<ResumeCreateWithoutAiRefinementsInput, ResumeUncheckedCreateWithoutAiRefinementsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutAiRefinementsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutAiRefinementsInput, ResumeUncheckedUpdateWithoutAiRefinementsInput>
  }

  export type ResumeUpdateWithoutAiRefinementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutAiRefinementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type JobApplicationUpsertWithoutAiRefinementsInput = {
    update: XOR<JobApplicationUpdateWithoutAiRefinementsInput, JobApplicationUncheckedUpdateWithoutAiRefinementsInput>
    create: XOR<JobApplicationCreateWithoutAiRefinementsInput, JobApplicationUncheckedCreateWithoutAiRefinementsInput>
    where?: JobApplicationWhereInput
  }

  export type JobApplicationUpdateToOneWithWhereWithoutAiRefinementsInput = {
    where?: JobApplicationWhereInput
    data: XOR<JobApplicationUpdateWithoutAiRefinementsInput, JobApplicationUncheckedUpdateWithoutAiRefinementsInput>
  }

  export type JobApplicationUpdateWithoutAiRefinementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutAiRefinementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateWithoutOpenAiResponsesInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutResumesInput
    contact?: ContactCreateNestedOneWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    work?: WorkCreateNestedManyWithoutResumeInput
    skills?: SkillCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutOpenAiResponsesInput = {
    id?: string
    userId?: string | null
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactUncheckedCreateNestedOneWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    work?: WorkUncheckedCreateNestedManyWithoutResumeInput
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutResumeInput
    aiRefinements?: AiRefinementUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutOpenAiResponsesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutOpenAiResponsesInput, ResumeUncheckedCreateWithoutOpenAiResponsesInput>
  }

  export type ResumeUpsertWithoutOpenAiResponsesInput = {
    update: XOR<ResumeUpdateWithoutOpenAiResponsesInput, ResumeUncheckedUpdateWithoutOpenAiResponsesInput>
    create: XOR<ResumeCreateWithoutOpenAiResponsesInput, ResumeUncheckedCreateWithoutOpenAiResponsesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutOpenAiResponsesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutOpenAiResponsesInput, ResumeUncheckedUpdateWithoutOpenAiResponsesInput>
  }

  export type ResumeUpdateWithoutOpenAiResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResumesNestedInput
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutOpenAiResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    name: string
    title: string
    initials?: string | null
    location?: string | null
    locationLink?: string | null
    about?: string | null
    summary?: string | null
    avatarUrl?: string | null
    personalWebsiteUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    work?: WorkUpdateManyWithoutResumeNestedInput
    skills?: SkillUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUncheckedUpdateOneWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    work?: WorkUncheckedUpdateManyWithoutResumeNestedInput
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutResumeNestedInput
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutResumeNestedInput
    openAiResponses?: OpenAiResponseUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationLink?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyResumeInput = {
    id?: string
    school: string
    degree: string
    start: string
    end: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkCreateManyResumeInput = {
    id?: string
    company: string
    link?: string | null
    title: string
    start: string
    end?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateManyResumeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyResumeInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateManyResumeInput = {
    id?: string
    company: string
    position: string
    status?: string
    appliedDate?: Date | string
    jobUrl?: string | null
    jobDescription?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiRefinementCreateManyResumeInput = {
    id?: string
    jobApplicationId: string
    refinements: string
    createdAt?: Date | string
  }

  export type OpenAiResponseCreateManyResumeInput = {
    id?: string
    prompt: string
    response: string
    createdAt?: Date | string
  }

  export type EducationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: WorkTasksUpdateManyWithoutWorkNestedInput
    badges?: WorkBadgeUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: WorkTasksUncheckedUpdateManyWithoutWorkNestedInput
    badges?: WorkBadgeUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: ProjectTechUpdateManyWithoutProjectNestedInput
    link?: ProjectLinkUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techStack?: ProjectTechUncheckedUpdateManyWithoutProjectNestedInput
    link?: ProjectLinkUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRefinements?: AiRefinementUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRefinements?: AiRefinementUncheckedUpdateManyWithoutJobApplicationNestedInput
  }

  export type JobApplicationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    appliedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplication?: JobApplicationUpdateOneRequiredWithoutAiRefinementsNestedInput
  }

  export type AiRefinementUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobApplicationId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpenAiResponseUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateManyContactInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksCreateManyWorkInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkBadgeCreateManyWorkInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkTasksUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkTasksUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkBadgeUncheckedUpdateManyWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechCreateManyProjectInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTechUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTechUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementCreateManyJobApplicationInput = {
    id?: string
    resumeId: string
    refinements: string
    createdAt?: Date | string
  }

  export type AiRefinementUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutAiRefinementsNestedInput
  }

  export type AiRefinementUncheckedUpdateWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiRefinementUncheckedUpdateManyWithoutJobApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    refinements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}