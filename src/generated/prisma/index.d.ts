
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    enrollments: EnrollmentPayload<ExtArgs>[]
    progress: ProgressPayload<ExtArgs>[]
    examResults: ExamResultPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    email: string
    password: string
    registration: string
    created_at: Date
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type LearningPathPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "LearningPath"
  objects: {
    courses: LearningPathCoursePayload<ExtArgs>[]
    enrollments: EnrollmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    description: string | null
    created_at: Date
  }, ExtArgs["result"]["learningPath"]>
  composites: {}
}

/**
 * Model LearningPath
 * 
 */
export type LearningPath = runtime.Types.DefaultSelection<LearningPathPayload>
export type CoursePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Course"
  objects: {
    paths: LearningPathCoursePayload<ExtArgs>[]
    progress: ProgressPayload<ExtArgs>[]
    exams: ExamPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    description: string | null
    scorm_path: string
    created_at: Date
  }, ExtArgs["result"]["course"]>
  composites: {}
}

/**
 * Model Course
 * 
 */
export type Course = runtime.Types.DefaultSelection<CoursePayload>
export type LearningPathCoursePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "LearningPathCourse"
  objects: {
    learning_path: LearningPathPayload<ExtArgs>
    course: CoursePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    learning_path_id: number
    course_id: number
  }, ExtArgs["result"]["learningPathCourse"]>
  composites: {}
}

/**
 * Model LearningPathCourse
 * 
 */
export type LearningPathCourse = runtime.Types.DefaultSelection<LearningPathCoursePayload>
export type GroupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Group"
  objects: {
    enrollments: EnrollmentPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    created_at: Date
  }, ExtArgs["result"]["group"]>
  composites: {}
}

/**
 * Model Group
 * 
 */
export type Group = runtime.Types.DefaultSelection<GroupPayload>
export type EnrollmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Enrollment"
  objects: {
    user: UserPayload<ExtArgs>
    group: GroupPayload<ExtArgs>
    learning_path: LearningPathPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    user_id: number
    group_id: number
    learning_path_id: number
    created_at: Date
  }, ExtArgs["result"]["enrollment"]>
  composites: {}
}

/**
 * Model Enrollment
 * 
 */
export type Enrollment = runtime.Types.DefaultSelection<EnrollmentPayload>
export type ProgressPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Progress"
  objects: {
    user: UserPayload<ExtArgs>
    course: CoursePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    user_id: number
    course_id: number
    percentage: number
    started_at: Date
    completed_at: Date | null
  }, ExtArgs["result"]["progress"]>
  composites: {}
}

/**
 * Model Progress
 * 
 */
export type Progress = runtime.Types.DefaultSelection<ProgressPayload>
export type ExamPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Exam"
  objects: {
    course: CoursePayload<ExtArgs>
    questions: QuestionPayload<ExtArgs>[]
    results: ExamResultPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    course_id: number
    title: string
    created_at: Date
  }, ExtArgs["result"]["exam"]>
  composites: {}
}

/**
 * Model Exam
 * 
 */
export type Exam = runtime.Types.DefaultSelection<ExamPayload>
export type QuestionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Question"
  objects: {
    exam: ExamPayload<ExtArgs>
    answers: AnswerPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    exam_id: number
    text: string
  }, ExtArgs["result"]["question"]>
  composites: {}
}

/**
 * Model Question
 * 
 */
export type Question = runtime.Types.DefaultSelection<QuestionPayload>
export type AnswerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Answer"
  objects: {
    question: QuestionPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    question_id: number
    text: string
    is_correct: boolean
  }, ExtArgs["result"]["answer"]>
  composites: {}
}

/**
 * Model Answer
 * 
 */
export type Answer = runtime.Types.DefaultSelection<AnswerPayload>
export type ExamResultPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ExamResult"
  objects: {
    user: UserPayload<ExtArgs>
    exam: ExamPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    user_id: number
    exam_id: number
    score: number
    submitted_at: Date
  }, ExtArgs["result"]["examResult"]>
  composites: {}
}

/**
 * Model ExamResult
 * 
 */
export type ExamResult = runtime.Types.DefaultSelection<ExamResultPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.learningPath`: Exposes CRUD operations for the **LearningPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPaths
    * const learningPaths = await prisma.learningPath.findMany()
    * ```
    */
  get learningPath(): Prisma.LearningPathDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.learningPathCourse`: Exposes CRUD operations for the **LearningPathCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPathCourses
    * const learningPathCourses = await prisma.learningPathCourse.findMany()
    * ```
    */
  get learningPathCourse(): Prisma.LearningPathCourseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **Progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.ProgressDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.examResult`: Exposes CRUD operations for the **ExamResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamResults
    * const examResults = await prisma.examResult.findMany()
    * ```
    */
  get examResult(): Prisma.ExamResultDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    LearningPath: 'LearningPath',
    Course: 'Course',
    LearningPathCourse: 'LearningPathCourse',
    Group: 'Group',
    Enrollment: 'Enrollment',
    Progress: 'Progress',
    Exam: 'Exam',
    Question: 'Question',
    Answer: 'Answer',
    ExamResult: 'ExamResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'learningPath' | 'course' | 'learningPathCourse' | 'group' | 'enrollment' | 'progress' | 'exam' | 'question' | 'answer' | 'examResult'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LearningPath: {
        payload: LearningPathPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LearningPathFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          findFirst: {
            args: Prisma.LearningPathFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          findMany: {
            args: Prisma.LearningPathFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>[]
          }
          create: {
            args: Prisma.LearningPathCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          createMany: {
            args: Prisma.LearningPathCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LearningPathDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          update: {
            args: Prisma.LearningPathUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          deleteMany: {
            args: Prisma.LearningPathDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LearningPathUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathPayload>
          }
          aggregate: {
            args: Prisma.LearningPathAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLearningPath>
          }
          groupBy: {
            args: Prisma.LearningPathGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPathCountArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: CoursePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      LearningPathCourse: {
        payload: LearningPathCoursePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LearningPathCourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathCourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          findFirst: {
            args: Prisma.LearningPathCourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathCourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          findMany: {
            args: Prisma.LearningPathCourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>[]
          }
          create: {
            args: Prisma.LearningPathCourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          createMany: {
            args: Prisma.LearningPathCourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LearningPathCourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          update: {
            args: Prisma.LearningPathCourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          deleteMany: {
            args: Prisma.LearningPathCourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathCourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LearningPathCourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LearningPathCoursePayload>
          }
          aggregate: {
            args: Prisma.LearningPathCourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLearningPathCourse>
          }
          groupBy: {
            args: Prisma.LearningPathCourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPathCourseCountArgs<ExtArgs>,
            result: $Utils.Optional<LearningPathCourseCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: GroupPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: EnrollmentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>,
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Progress: {
        payload: ProgressPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ProgressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          findFirst: {
            args: Prisma.ProgressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          findMany: {
            args: Prisma.ProgressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>[]
          }
          create: {
            args: Prisma.ProgressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          createMany: {
            args: Prisma.ProgressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProgressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          update: {
            args: Prisma.ProgressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          deleteMany: {
            args: Prisma.ProgressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProgressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.ProgressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: ExamPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>,
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: QuestionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: AnswerPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>,
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      ExamResult: {
        payload: ExamResultPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ExamResultFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamResultFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          findFirst: {
            args: Prisma.ExamResultFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamResultFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          findMany: {
            args: Prisma.ExamResultFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>[]
          }
          create: {
            args: Prisma.ExamResultCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          createMany: {
            args: Prisma.ExamResultCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExamResultDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          update: {
            args: Prisma.ExamResultUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          deleteMany: {
            args: Prisma.ExamResultDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExamResultUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExamResultUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExamResultPayload>
          }
          aggregate: {
            args: Prisma.ExamResultAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExamResult>
          }
          groupBy: {
            args: Prisma.ExamResultGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExamResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamResultCountArgs<ExtArgs>,
            result: $Utils.Optional<ExamResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
    enrollments: number
    progress: number
    examResults: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    examResults?: boolean | UserCountOutputTypeCountExamResultsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamResultsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExamResultWhereInput
  }



  /**
   * Count Type LearningPathCountOutputType
   */


  export type LearningPathCountOutputType = {
    courses: number
    enrollments: number
  }

  export type LearningPathCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    courses?: boolean | LearningPathCountOutputTypeCountCoursesArgs
    enrollments?: boolean | LearningPathCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCountOutputType
     */
    select?: LearningPathCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LearningPathCourseWhereInput
  }


  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }



  /**
   * Count Type CourseCountOutputType
   */


  export type CourseCountOutputType = {
    paths: number
    progress: number
    exams: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paths?: boolean | CourseCountOutputTypeCountPathsArgs
    progress?: boolean | CourseCountOutputTypeCountProgressArgs
    exams?: boolean | CourseCountOutputTypeCountExamsArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPathsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LearningPathCourseWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */


  export type GroupCountOutputType = {
    enrollments: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrollments?: boolean | GroupCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }



  /**
   * Count Type ExamCountOutputType
   */


  export type ExamCountOutputType = {
    questions: number
    results: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    results?: boolean | ExamCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExamResultWhereInput
  }



  /**
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    registration: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    registration: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    registration: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    registration?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    registration?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    registration?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    id: number
    name: string
    email: string
    password: string
    registration: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    registration?: boolean
    created_at?: boolean
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    examResults?: boolean | User$examResultsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    registration?: boolean
    created_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    examResults?: boolean | User$examResultsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findMany', never>| Null>;

    examResults<T extends User$examResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$examResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProgressScalarFieldEnum>
  }


  /**
   * User.examResults
   */
  export type User$examResultsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    where?: ExamResultWhereInput
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    cursor?: ExamResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExamResultScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model LearningPath
   */


  export type AggregateLearningPath = {
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  export type LearningPathAvgAggregateOutputType = {
    id: number | null
  }

  export type LearningPathSumAggregateOutputType = {
    id: number | null
  }

  export type LearningPathMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    created_at: Date | null
  }

  export type LearningPathMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    created_at: Date | null
  }

  export type LearningPathCountAggregateOutputType = {
    id: number
    title: number
    description: number
    created_at: number
    _all: number
  }


  export type LearningPathAvgAggregateInputType = {
    id?: true
  }

  export type LearningPathSumAggregateInputType = {
    id?: true
  }

  export type LearningPathMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
  }

  export type LearningPathMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
  }

  export type LearningPathCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type LearningPathAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPath to aggregate.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: Enumerable<LearningPathOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPaths
    **/
    _count?: true | LearningPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathMaxAggregateInputType
  }

  export type GetLearningPathAggregateType<T extends LearningPathAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPath[P]>
      : GetScalarType<T[P], AggregateLearningPath[P]>
  }




  export type LearningPathGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
    orderBy?: Enumerable<LearningPathOrderByWithAggregationInput>
    by: LearningPathScalarFieldEnum[]
    having?: LearningPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathCountAggregateInputType | true
    _avg?: LearningPathAvgAggregateInputType
    _sum?: LearningPathSumAggregateInputType
    _min?: LearningPathMinAggregateInputType
    _max?: LearningPathMaxAggregateInputType
  }


  export type LearningPathGroupByOutputType = {
    id: number
    title: string
    description: string | null
    created_at: Date
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  type GetLearningPathGroupByPayload<T extends LearningPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LearningPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    courses?: boolean | LearningPath$coursesArgs<ExtArgs>
    enrollments?: boolean | LearningPath$enrollmentsArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>

  export type LearningPathSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type LearningPathInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    courses?: boolean | LearningPath$coursesArgs<ExtArgs>
    enrollments?: boolean | LearningPath$enrollmentsArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeArgs<ExtArgs>
  }


  type LearningPathGetPayload<S extends boolean | null | undefined | LearningPathArgs> = $Types.GetResult<LearningPathPayload, S>

  type LearningPathCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LearningPathFindManyArgs, 'select' | 'include'> & {
      select?: LearningPathCountAggregateInputType | true
    }

  export interface LearningPathDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPath'], meta: { name: 'LearningPath' } }
    /**
     * Find zero or one LearningPath that matches the filter.
     * @param {LearningPathFindUniqueArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LearningPathFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LearningPathFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LearningPath'> extends True ? Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one LearningPath that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LearningPathFindUniqueOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LearningPathFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first LearningPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LearningPathFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LearningPathFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LearningPath'> extends True ? Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first LearningPath that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LearningPathFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more LearningPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPaths
     * const learningPaths = await prisma.learningPath.findMany()
     * 
     * // Get first 10 LearningPaths
     * const learningPaths = await prisma.learningPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LearningPathFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a LearningPath.
     * @param {LearningPathCreateArgs} args - Arguments to create a LearningPath.
     * @example
     * // Create one LearningPath
     * const LearningPath = await prisma.learningPath.create({
     *   data: {
     *     // ... data to create a LearningPath
     *   }
     * })
     * 
    **/
    create<T extends LearningPathCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCreateArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many LearningPaths.
     *     @param {LearningPathCreateManyArgs} args - Arguments to create many LearningPaths.
     *     @example
     *     // Create many LearningPaths
     *     const learningPath = await prisma.learningPath.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LearningPathCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LearningPath.
     * @param {LearningPathDeleteArgs} args - Arguments to delete one LearningPath.
     * @example
     * // Delete one LearningPath
     * const LearningPath = await prisma.learningPath.delete({
     *   where: {
     *     // ... filter to delete one LearningPath
     *   }
     * })
     * 
    **/
    delete<T extends LearningPathDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathDeleteArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one LearningPath.
     * @param {LearningPathUpdateArgs} args - Arguments to update one LearningPath.
     * @example
     * // Update one LearningPath
     * const learningPath = await prisma.learningPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LearningPathUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpdateArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more LearningPaths.
     * @param {LearningPathDeleteManyArgs} args - Arguments to filter LearningPaths to delete.
     * @example
     * // Delete a few LearningPaths
     * const { count } = await prisma.learningPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LearningPathDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPaths
     * const learningPath = await prisma.learningPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LearningPathUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningPath.
     * @param {LearningPathUpsertArgs} args - Arguments to update or create a LearningPath.
     * @example
     * // Update or create a LearningPath
     * const learningPath = await prisma.learningPath.upsert({
     *   create: {
     *     // ... data to create a LearningPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPath we want to update
     *   }
     * })
    **/
    upsert<T extends LearningPathUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathUpsertArgs<ExtArgs>>
    ): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCountArgs} args - Arguments to filter LearningPaths to count.
     * @example
     * // Count the number of LearningPaths
     * const count = await prisma.learningPath.count({
     *   where: {
     *     // ... the filter for the LearningPaths we want to count
     *   }
     * })
    **/
    count<T extends LearningPathCountArgs>(
      args?: Subset<T, LearningPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathAggregateArgs>(args: Subset<T, LearningPathAggregateArgs>): Prisma.PrismaPromise<GetLearningPathAggregateType<T>>

    /**
     * Group by LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathGroupByArgs} args - Group by arguments.
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
      T extends LearningPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LearningPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LearningPathClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    courses<T extends LearningPath$coursesArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findMany', never>| Null>;

    enrollments<T extends LearningPath$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LearningPath base type for findUnique actions
   */
  export type LearningPathFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath findUnique
   */
  export interface LearningPathFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LearningPathFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LearningPath findUniqueOrThrow
   */
  export type LearningPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath base type for findFirst actions
   */
  export type LearningPathFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: Enumerable<LearningPathOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: Enumerable<LearningPathScalarFieldEnum>
  }

  /**
   * LearningPath findFirst
   */
  export interface LearningPathFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LearningPathFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LearningPath findFirstOrThrow
   */
  export type LearningPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: Enumerable<LearningPathOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: Enumerable<LearningPathScalarFieldEnum>
  }


  /**
   * LearningPath findMany
   */
  export type LearningPathFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPaths to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: Enumerable<LearningPathOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    distinct?: Enumerable<LearningPathScalarFieldEnum>
  }


  /**
   * LearningPath create
   */
  export type LearningPathCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPath.
     */
    data: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
  }


  /**
   * LearningPath createMany
   */
  export type LearningPathCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPaths.
     */
    data: Enumerable<LearningPathCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LearningPath update
   */
  export type LearningPathUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPath.
     */
    data: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
    /**
     * Choose, which LearningPath to update.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath updateMany
   */
  export type LearningPathUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPaths.
     */
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyInput>
    /**
     * Filter which LearningPaths to update
     */
    where?: LearningPathWhereInput
  }


  /**
   * LearningPath upsert
   */
  export type LearningPathUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPath to update in case it exists.
     */
    where: LearningPathWhereUniqueInput
    /**
     * In case the LearningPath found by the `where` argument doesn't exist, create a new LearningPath with this data.
     */
    create: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
    /**
     * In case the LearningPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
  }


  /**
   * LearningPath delete
   */
  export type LearningPathDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter which LearningPath to delete.
     */
    where: LearningPathWhereUniqueInput
  }


  /**
   * LearningPath deleteMany
   */
  export type LearningPathDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPaths to delete
     */
    where?: LearningPathWhereInput
  }


  /**
   * LearningPath.courses
   */
  export type LearningPath$coursesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    where?: LearningPathCourseWhereInput
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    cursor?: LearningPathCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LearningPathCourseScalarFieldEnum>
  }


  /**
   * LearningPath.enrollments
   */
  export type LearningPath$enrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * LearningPath without action
   */
  export type LearningPathArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathInclude<ExtArgs> | null
  }



  /**
   * Model Course
   */


  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    scorm_path: string | null
    created_at: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    scorm_path: string | null
    created_at: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    scorm_path: number
    created_at: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scorm_path?: true
    created_at?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scorm_path?: true
    created_at?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scorm_path?: true
    created_at?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: Enumerable<CourseOrderByWithAggregationInput>
    by: CourseScalarFieldEnum[]
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }


  export type CourseGroupByOutputType = {
    id: number
    title: string
    description: string | null
    scorm_path: string
    created_at: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    scorm_path?: boolean
    created_at?: boolean
    paths?: boolean | Course$pathsArgs<ExtArgs>
    progress?: boolean | Course$progressArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    scorm_path?: boolean
    created_at?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paths?: boolean | Course$pathsArgs<ExtArgs>
    progress?: boolean | Course$progressArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeArgs<ExtArgs>
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseArgs> = $Types.GetResult<CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Course'> extends True ? Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Course'> extends True ? Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    paths<T extends Course$pathsArgs<ExtArgs> = {}>(args?: Subset<T, Course$pathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findMany', never>| Null>;

    progress<T extends Course$progressArgs<ExtArgs> = {}>(args?: Subset<T, Course$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findMany', never>| Null>;

    exams<T extends Course$examsArgs<ExtArgs> = {}>(args?: Subset<T, Course$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Course base type for findUnique actions
   */
  export type CourseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUnique
   */
  export interface CourseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CourseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course base type for findFirst actions
   */
  export type CourseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }

  /**
   * Course findFirst
   */
  export interface CourseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CourseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: Enumerable<CourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: Enumerable<CourseScalarFieldEnum>
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: Enumerable<CourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.paths
   */
  export type Course$pathsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    where?: LearningPathCourseWhereInput
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    cursor?: LearningPathCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LearningPathCourseScalarFieldEnum>
  }


  /**
   * Course.progress
   */
  export type Course$progressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProgressScalarFieldEnum>
  }


  /**
   * Course.exams
   */
  export type Course$examsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: Enumerable<ExamOrderByWithRelationInput>
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExamScalarFieldEnum>
  }


  /**
   * Course without action
   */
  export type CourseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
  }



  /**
   * Model LearningPathCourse
   */


  export type AggregateLearningPathCourse = {
    _count: LearningPathCourseCountAggregateOutputType | null
    _avg: LearningPathCourseAvgAggregateOutputType | null
    _sum: LearningPathCourseSumAggregateOutputType | null
    _min: LearningPathCourseMinAggregateOutputType | null
    _max: LearningPathCourseMaxAggregateOutputType | null
  }

  export type LearningPathCourseAvgAggregateOutputType = {
    id: number | null
    learning_path_id: number | null
    course_id: number | null
  }

  export type LearningPathCourseSumAggregateOutputType = {
    id: number | null
    learning_path_id: number | null
    course_id: number | null
  }

  export type LearningPathCourseMinAggregateOutputType = {
    id: number | null
    learning_path_id: number | null
    course_id: number | null
  }

  export type LearningPathCourseMaxAggregateOutputType = {
    id: number | null
    learning_path_id: number | null
    course_id: number | null
  }

  export type LearningPathCourseCountAggregateOutputType = {
    id: number
    learning_path_id: number
    course_id: number
    _all: number
  }


  export type LearningPathCourseAvgAggregateInputType = {
    id?: true
    learning_path_id?: true
    course_id?: true
  }

  export type LearningPathCourseSumAggregateInputType = {
    id?: true
    learning_path_id?: true
    course_id?: true
  }

  export type LearningPathCourseMinAggregateInputType = {
    id?: true
    learning_path_id?: true
    course_id?: true
  }

  export type LearningPathCourseMaxAggregateInputType = {
    id?: true
    learning_path_id?: true
    course_id?: true
  }

  export type LearningPathCourseCountAggregateInputType = {
    id?: true
    learning_path_id?: true
    course_id?: true
    _all?: true
  }

  export type LearningPathCourseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPathCourse to aggregate.
     */
    where?: LearningPathCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathCourses to fetch.
     */
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPathCourses
    **/
    _count?: true | LearningPathCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathCourseMaxAggregateInputType
  }

  export type GetLearningPathCourseAggregateType<T extends LearningPathCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPathCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPathCourse[P]>
      : GetScalarType<T[P], AggregateLearningPathCourse[P]>
  }




  export type LearningPathCourseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LearningPathCourseWhereInput
    orderBy?: Enumerable<LearningPathCourseOrderByWithAggregationInput>
    by: LearningPathCourseScalarFieldEnum[]
    having?: LearningPathCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathCourseCountAggregateInputType | true
    _avg?: LearningPathCourseAvgAggregateInputType
    _sum?: LearningPathCourseSumAggregateInputType
    _min?: LearningPathCourseMinAggregateInputType
    _max?: LearningPathCourseMaxAggregateInputType
  }


  export type LearningPathCourseGroupByOutputType = {
    id: number
    learning_path_id: number
    course_id: number
    _count: LearningPathCourseCountAggregateOutputType | null
    _avg: LearningPathCourseAvgAggregateOutputType | null
    _sum: LearningPathCourseSumAggregateOutputType | null
    _min: LearningPathCourseMinAggregateOutputType | null
    _max: LearningPathCourseMaxAggregateOutputType | null
  }

  type GetLearningPathCourseGroupByPayload<T extends LearningPathCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LearningPathCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathCourseGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathCourseGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathCourseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    learning_path_id?: boolean
    course_id?: boolean
    learning_path?: boolean | LearningPathArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }, ExtArgs["result"]["learningPathCourse"]>

  export type LearningPathCourseSelectScalar = {
    id?: boolean
    learning_path_id?: boolean
    course_id?: boolean
  }

  export type LearningPathCourseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    learning_path?: boolean | LearningPathArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }


  type LearningPathCourseGetPayload<S extends boolean | null | undefined | LearningPathCourseArgs> = $Types.GetResult<LearningPathCoursePayload, S>

  type LearningPathCourseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LearningPathCourseFindManyArgs, 'select' | 'include'> & {
      select?: LearningPathCourseCountAggregateInputType | true
    }

  export interface LearningPathCourseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPathCourse'], meta: { name: 'LearningPathCourse' } }
    /**
     * Find zero or one LearningPathCourse that matches the filter.
     * @param {LearningPathCourseFindUniqueArgs} args - Arguments to find a LearningPathCourse
     * @example
     * // Get one LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LearningPathCourseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LearningPathCourseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LearningPathCourse'> extends True ? Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one LearningPathCourse that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LearningPathCourseFindUniqueOrThrowArgs} args - Arguments to find a LearningPathCourse
     * @example
     * // Get one LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LearningPathCourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first LearningPathCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseFindFirstArgs} args - Arguments to find a LearningPathCourse
     * @example
     * // Get one LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LearningPathCourseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LearningPathCourseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LearningPathCourse'> extends True ? Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first LearningPathCourse that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseFindFirstOrThrowArgs} args - Arguments to find a LearningPathCourse
     * @example
     * // Get one LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LearningPathCourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more LearningPathCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPathCourses
     * const learningPathCourses = await prisma.learningPathCourse.findMany()
     * 
     * // Get first 10 LearningPathCourses
     * const learningPathCourses = await prisma.learningPathCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathCourseWithIdOnly = await prisma.learningPathCourse.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LearningPathCourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a LearningPathCourse.
     * @param {LearningPathCourseCreateArgs} args - Arguments to create a LearningPathCourse.
     * @example
     * // Create one LearningPathCourse
     * const LearningPathCourse = await prisma.learningPathCourse.create({
     *   data: {
     *     // ... data to create a LearningPathCourse
     *   }
     * })
     * 
    **/
    create<T extends LearningPathCourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCourseCreateArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many LearningPathCourses.
     *     @param {LearningPathCourseCreateManyArgs} args - Arguments to create many LearningPathCourses.
     *     @example
     *     // Create many LearningPathCourses
     *     const learningPathCourse = await prisma.learningPathCourse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LearningPathCourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LearningPathCourse.
     * @param {LearningPathCourseDeleteArgs} args - Arguments to delete one LearningPathCourse.
     * @example
     * // Delete one LearningPathCourse
     * const LearningPathCourse = await prisma.learningPathCourse.delete({
     *   where: {
     *     // ... filter to delete one LearningPathCourse
     *   }
     * })
     * 
    **/
    delete<T extends LearningPathCourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCourseDeleteArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one LearningPathCourse.
     * @param {LearningPathCourseUpdateArgs} args - Arguments to update one LearningPathCourse.
     * @example
     * // Update one LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LearningPathCourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCourseUpdateArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more LearningPathCourses.
     * @param {LearningPathCourseDeleteManyArgs} args - Arguments to filter LearningPathCourses to delete.
     * @example
     * // Delete a few LearningPathCourses
     * const { count } = await prisma.learningPathCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LearningPathCourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LearningPathCourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPathCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPathCourses
     * const learningPathCourse = await prisma.learningPathCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LearningPathCourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningPathCourse.
     * @param {LearningPathCourseUpsertArgs} args - Arguments to update or create a LearningPathCourse.
     * @example
     * // Update or create a LearningPathCourse
     * const learningPathCourse = await prisma.learningPathCourse.upsert({
     *   create: {
     *     // ... data to create a LearningPathCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPathCourse we want to update
     *   }
     * })
    **/
    upsert<T extends LearningPathCourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LearningPathCourseUpsertArgs<ExtArgs>>
    ): Prisma__LearningPathCourseClient<$Types.GetResult<LearningPathCoursePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of LearningPathCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseCountArgs} args - Arguments to filter LearningPathCourses to count.
     * @example
     * // Count the number of LearningPathCourses
     * const count = await prisma.learningPathCourse.count({
     *   where: {
     *     // ... the filter for the LearningPathCourses we want to count
     *   }
     * })
    **/
    count<T extends LearningPathCourseCountArgs>(
      args?: Subset<T, LearningPathCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPathCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathCourseAggregateArgs>(args: Subset<T, LearningPathCourseAggregateArgs>): Prisma.PrismaPromise<GetLearningPathCourseAggregateType<T>>

    /**
     * Group by LearningPathCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCourseGroupByArgs} args - Group by arguments.
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
      T extends LearningPathCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathCourseGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LearningPathCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPathCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LearningPathCourseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    learning_path<T extends LearningPathArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathArgs<ExtArgs>>): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    course<T extends CourseArgs<ExtArgs> = {}>(args?: Subset<T, CourseArgs<ExtArgs>>): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LearningPathCourse base type for findUnique actions
   */
  export type LearningPathCourseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathCourse to fetch.
     */
    where: LearningPathCourseWhereUniqueInput
  }

  /**
   * LearningPathCourse findUnique
   */
  export interface LearningPathCourseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LearningPathCourseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LearningPathCourse findUniqueOrThrow
   */
  export type LearningPathCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathCourse to fetch.
     */
    where: LearningPathCourseWhereUniqueInput
  }


  /**
   * LearningPathCourse base type for findFirst actions
   */
  export type LearningPathCourseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathCourse to fetch.
     */
    where?: LearningPathCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathCourses to fetch.
     */
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPathCourses.
     */
    cursor?: LearningPathCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPathCourses.
     */
    distinct?: Enumerable<LearningPathCourseScalarFieldEnum>
  }

  /**
   * LearningPathCourse findFirst
   */
  export interface LearningPathCourseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LearningPathCourseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LearningPathCourse findFirstOrThrow
   */
  export type LearningPathCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathCourse to fetch.
     */
    where?: LearningPathCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathCourses to fetch.
     */
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPathCourses.
     */
    cursor?: LearningPathCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPathCourses.
     */
    distinct?: Enumerable<LearningPathCourseScalarFieldEnum>
  }


  /**
   * LearningPathCourse findMany
   */
  export type LearningPathCourseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter, which LearningPathCourses to fetch.
     */
    where?: LearningPathCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPathCourses to fetch.
     */
    orderBy?: Enumerable<LearningPathCourseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPathCourses.
     */
    cursor?: LearningPathCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPathCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPathCourses.
     */
    skip?: number
    distinct?: Enumerable<LearningPathCourseScalarFieldEnum>
  }


  /**
   * LearningPathCourse create
   */
  export type LearningPathCourseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPathCourse.
     */
    data: XOR<LearningPathCourseCreateInput, LearningPathCourseUncheckedCreateInput>
  }


  /**
   * LearningPathCourse createMany
   */
  export type LearningPathCourseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPathCourses.
     */
    data: Enumerable<LearningPathCourseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LearningPathCourse update
   */
  export type LearningPathCourseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPathCourse.
     */
    data: XOR<LearningPathCourseUpdateInput, LearningPathCourseUncheckedUpdateInput>
    /**
     * Choose, which LearningPathCourse to update.
     */
    where: LearningPathCourseWhereUniqueInput
  }


  /**
   * LearningPathCourse updateMany
   */
  export type LearningPathCourseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPathCourses.
     */
    data: XOR<LearningPathCourseUpdateManyMutationInput, LearningPathCourseUncheckedUpdateManyInput>
    /**
     * Filter which LearningPathCourses to update
     */
    where?: LearningPathCourseWhereInput
  }


  /**
   * LearningPathCourse upsert
   */
  export type LearningPathCourseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPathCourse to update in case it exists.
     */
    where: LearningPathCourseWhereUniqueInput
    /**
     * In case the LearningPathCourse found by the `where` argument doesn't exist, create a new LearningPathCourse with this data.
     */
    create: XOR<LearningPathCourseCreateInput, LearningPathCourseUncheckedCreateInput>
    /**
     * In case the LearningPathCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathCourseUpdateInput, LearningPathCourseUncheckedUpdateInput>
  }


  /**
   * LearningPathCourse delete
   */
  export type LearningPathCourseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
    /**
     * Filter which LearningPathCourse to delete.
     */
    where: LearningPathCourseWhereUniqueInput
  }


  /**
   * LearningPathCourse deleteMany
   */
  export type LearningPathCourseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPathCourses to delete
     */
    where?: LearningPathCourseWhereInput
  }


  /**
   * LearningPathCourse without action
   */
  export type LearningPathCourseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCourse
     */
    select?: LearningPathCourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LearningPathCourseInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */


  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: Enumerable<GroupOrderByWithAggregationInput>
    by: GroupScalarFieldEnum[]
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }


  export type GroupGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    enrollments?: boolean | Group$enrollmentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    enrollments?: boolean | Group$enrollmentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeArgs<ExtArgs>
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupArgs> = $Types.GetResult<GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Group'> extends True ? Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Group'> extends True ? Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    enrollments<T extends Group$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Group base type for findUnique actions
   */
  export type GroupFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUnique
   */
  export interface GroupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group base type for findFirst actions
   */
  export type GroupFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: Enumerable<GroupScalarFieldEnum>
  }

  /**
   * Group findFirst
   */
  export interface GroupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: Enumerable<GroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.enrollments
   */
  export type Group$enrollmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Group without action
   */
  export type GroupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model Enrollment
   */


  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
    learning_path_id: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
    learning_path_id: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
    learning_path_id: number | null
    created_at: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    group_id: number | null
    learning_path_id: number | null
    created_at: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    user_id: number
    group_id: number
    learning_path_id: number
    created_at: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    learning_path_id?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    learning_path_id?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    learning_path_id?: true
    created_at?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    learning_path_id?: true
    created_at?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    user_id?: true
    group_id?: true
    learning_path_id?: true
    created_at?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: Enumerable<EnrollmentOrderByWithAggregationInput>
    by: EnrollmentScalarFieldEnum[]
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }


  export type EnrollmentGroupByOutputType = {
    id: number
    user_id: number
    group_id: number
    learning_path_id: number
    created_at: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    learning_path_id?: boolean
    created_at?: boolean
    user?: boolean | UserArgs<ExtArgs>
    group?: boolean | GroupArgs<ExtArgs>
    learning_path?: boolean | LearningPathArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    user_id?: boolean
    group_id?: boolean
    learning_path_id?: boolean
    created_at?: boolean
  }

  export type EnrollmentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    group?: boolean | GroupArgs<ExtArgs>
    learning_path?: boolean | LearningPathArgs<ExtArgs>
  }


  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentArgs> = $Types.GetResult<EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EnrollmentFindManyArgs, 'select' | 'include'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EnrollmentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Enrollment'> extends True ? Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Enrollment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EnrollmentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Enrollment'> extends True ? Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EnrollmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
    **/
    create<T extends EnrollmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Enrollments.
     *     @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     *     @example
     *     // Create many Enrollments
     *     const enrollment = await prisma.enrollment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EnrollmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
    **/
    delete<T extends EnrollmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EnrollmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EnrollmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EnrollmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
    **/
    upsert<T extends EnrollmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>
    ): Prisma__EnrollmentClient<$Types.GetResult<EnrollmentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    group<T extends GroupArgs<ExtArgs> = {}>(args?: Subset<T, GroupArgs<ExtArgs>>): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    learning_path<T extends LearningPathArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathArgs<ExtArgs>>): Prisma__LearningPathClient<$Types.GetResult<LearningPathPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Enrollment base type for findUnique actions
   */
  export type EnrollmentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUnique
   */
  export interface EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrollmentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment base type for findFirst actions
   */
  export type EnrollmentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }

  /**
   * Enrollment findFirst
   */
  export interface EnrollmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EnrollmentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: Enumerable<EnrollmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: Enumerable<EnrollmentScalarFieldEnum>
  }


  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }


  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: Enumerable<EnrollmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }


  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }


  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
  }


  /**
   * Enrollment without action
   */
  export type EnrollmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }



  /**
   * Model Progress
   */


  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  export type ProgressAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    percentage: number | null
  }

  export type ProgressSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    percentage: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    percentage: number | null
    started_at: Date | null
    completed_at: Date | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    percentage: number | null
    started_at: Date | null
    completed_at: Date | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    percentage: number
    started_at: number
    completed_at: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    percentage?: true
  }

  export type ProgressSumAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    percentage?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    percentage?: true
    started_at?: true
    completed_at?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    percentage?: true
    started_at?: true
    completed_at?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    percentage?: true
    started_at?: true
    completed_at?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progress to aggregate.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresses
    **/
    _count?: true | ProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressMaxAggregateInputType
  }

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>
  }




  export type ProgressGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
    orderBy?: Enumerable<ProgressOrderByWithAggregationInput>
    by: ProgressScalarFieldEnum[]
    having?: ProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressCountAggregateInputType | true
    _avg?: ProgressAvgAggregateInputType
    _sum?: ProgressSumAggregateInputType
    _min?: ProgressMinAggregateInputType
    _max?: ProgressMaxAggregateInputType
  }


  export type ProgressGroupByOutputType = {
    id: number
    user_id: number
    course_id: number
    percentage: number
    started_at: Date
    completed_at: Date | null
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends ProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
        }
      >
    >


  export type ProgressSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    percentage?: boolean
    started_at?: boolean
    completed_at?: boolean
    user?: boolean | UserArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    percentage?: boolean
    started_at?: boolean
    completed_at?: boolean
  }

  export type ProgressInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    course?: boolean | CourseArgs<ExtArgs>
  }


  type ProgressGetPayload<S extends boolean | null | undefined | ProgressArgs> = $Types.GetResult<ProgressPayload, S>

  type ProgressCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProgressFindManyArgs, 'select' | 'include'> & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface ProgressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progress'], meta: { name: 'Progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {ProgressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgressFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProgressFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Progress'> extends True ? Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Progress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProgressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgressFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProgressFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Progress'> extends True ? Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Progress that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     * 
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Progress.
     * @param {ProgressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
    **/
    create<T extends ProgressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressCreateArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Progresses.
     *     @param {ProgressCreateManyArgs} args - Arguments to create many Progresses.
     *     @example
     *     // Create many Progresses
     *     const progress = await prisma.progress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProgressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progress.
     * @param {ProgressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
    **/
    delete<T extends ProgressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressDeleteArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Progress.
     * @param {ProgressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Progresses.
     * @param {ProgressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progress.
     * @param {ProgressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
    **/
    upsert<T extends ProgressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpsertArgs<ExtArgs>>
    ): Prisma__ProgressClient<$Types.GetResult<ProgressPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends ProgressCountArgs>(
      args?: Subset<T, ProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressAggregateArgs>(args: Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressGroupByArgs} args - Group by arguments.
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
      T extends ProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressGroupByArgs['orderBy'] }
        : { orderBy?: ProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProgressClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    course<T extends CourseArgs<ExtArgs> = {}>(args?: Subset<T, CourseArgs<ExtArgs>>): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Progress base type for findUnique actions
   */
  export type ProgressFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findUnique
   */
  export interface ProgressFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProgressFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Progress findUniqueOrThrow
   */
  export type ProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress base type for findFirst actions
   */
  export type ProgressFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: Enumerable<ProgressScalarFieldEnum>
  }

  /**
   * Progress findFirst
   */
  export interface ProgressFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProgressFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Progress findFirstOrThrow
   */
  export type ProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: Enumerable<ProgressScalarFieldEnum>
  }


  /**
   * Progress findMany
   */
  export type ProgressFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progresses to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: Enumerable<ProgressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    distinct?: Enumerable<ProgressScalarFieldEnum>
  }


  /**
   * Progress create
   */
  export type ProgressCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a Progress.
     */
    data: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
  }


  /**
   * Progress createMany
   */
  export type ProgressCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresses.
     */
    data: Enumerable<ProgressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Progress update
   */
  export type ProgressUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a Progress.
     */
    data: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
    /**
     * Choose, which Progress to update.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress updateMany
   */
  export type ProgressUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
  }


  /**
   * Progress upsert
   */
  export type ProgressUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the Progress to update in case it exists.
     */
    where: ProgressWhereUniqueInput
    /**
     * In case the Progress found by the `where` argument doesn't exist, create a new Progress with this data.
     */
    create: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
    /**
     * In case the Progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
  }


  /**
   * Progress delete
   */
  export type ProgressDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter which Progress to delete.
     */
    where: ProgressWhereUniqueInput
  }


  /**
   * Progress deleteMany
   */
  export type ProgressDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresses to delete
     */
    where?: ProgressWhereInput
  }


  /**
   * Progress without action
   */
  export type ProgressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressInclude<ExtArgs> | null
  }



  /**
   * Model Exam
   */


  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
  }

  export type ExamSumAggregateOutputType = {
    id: number | null
    course_id: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: number | null
    course_id: number | null
    title: string | null
    created_at: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: number | null
    course_id: number | null
    title: string | null
    created_at: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    course_id: number
    title: number
    created_at: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type ExamSumAggregateInputType = {
    id?: true
    course_id?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    created_at?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    created_at?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    created_at?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: Enumerable<ExamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: Enumerable<ExamOrderByWithAggregationInput>
    by: ExamScalarFieldEnum[]
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }


  export type ExamGroupByOutputType = {
    id: number
    course_id: number
    title: string
    created_at: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    title?: boolean
    created_at?: boolean
    course?: boolean | CourseArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    course_id?: boolean
    title?: boolean
    created_at?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    course?: boolean | CourseArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeArgs<ExtArgs>
  }


  type ExamGetPayload<S extends boolean | null | undefined | ExamArgs> = $Types.GetResult<ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exam'> extends True ? Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exam'> extends True ? Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
    **/
    create<T extends ExamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamCreateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Exams.
     *     @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     *     @example
     *     // Create many Exams
     *     const exam = await prisma.exam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
    **/
    delete<T extends ExamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
    **/
    upsert<T extends ExamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>
    ): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    course<T extends CourseArgs<ExtArgs> = {}>(args?: Subset<T, CourseArgs<ExtArgs>>): Prisma__CourseClient<$Types.GetResult<CoursePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    results<T extends Exam$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exam base type for findUnique actions
   */
  export type ExamFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUnique
   */
  export interface ExamFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExamFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam base type for findFirst actions
   */
  export type ExamFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: Enumerable<ExamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: Enumerable<ExamScalarFieldEnum>
  }

  /**
   * Exam findFirst
   */
  export interface ExamFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExamFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: Enumerable<ExamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: Enumerable<ExamScalarFieldEnum>
  }


  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: Enumerable<ExamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: Enumerable<ExamScalarFieldEnum>
  }


  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }


  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: Enumerable<ExamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }


  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }


  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }


  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Exam.results
   */
  export type Exam$resultsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    where?: ExamResultWhereInput
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    cursor?: ExamResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExamResultScalarFieldEnum>
  }


  /**
   * Exam without action
   */
  export type ExamArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
  }



  /**
   * Model Question
   */


  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    exam_id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    exam_id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    exam_id: number | null
    text: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    exam_id: number | null
    text: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    exam_id: number
    text: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    exam_id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    exam_id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    exam_id?: true
    text?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    exam_id?: true
    text?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    exam_id?: true
    text?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>
    by: QuestionScalarFieldEnum[]
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }


  export type QuestionGroupByOutputType = {
    id: number
    exam_id: number
    text: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    text?: boolean
    exam?: boolean | ExamArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    exam_id?: boolean
    text?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeArgs<ExtArgs>
  }


  type QuestionGetPayload<S extends boolean | null | undefined | QuestionArgs> = $Types.GetResult<QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Question'> extends True ? Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Question'> extends True ? Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    exam<T extends ExamArgs<ExtArgs> = {}>(args?: Subset<T, ExamArgs<ExtArgs>>): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Question base type for findUnique actions
   */
  export type QuestionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUnique
   */
  export interface QuestionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuestionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question base type for findFirst actions
   */
  export type QuestionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }

  /**
   * Question findFirst
   */
  export interface QuestionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends QuestionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: Enumerable<QuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }


  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: Enumerable<AnswerOrderByWithRelationInput>
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Question without action
   */
  export type QuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
  }



  /**
   * Model Answer
   */


  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    question_id: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    question_id: number | null
    text: string | null
    is_correct: boolean | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    question_id: number | null
    text: string | null
    is_correct: boolean | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    question_id: number
    text: number
    is_correct: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    question_id?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    question_id?: true
    text?: true
    is_correct?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    question_id?: true
    text?: true
    is_correct?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    question_id?: true
    text?: true
    is_correct?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: Enumerable<AnswerOrderByWithAggregationInput>
    by: AnswerScalarFieldEnum[]
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }


  export type AnswerGroupByOutputType = {
    id: number
    question_id: number
    text: string
    is_correct: boolean
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    text?: boolean
    is_correct?: boolean
    question?: boolean | QuestionArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    question_id?: boolean
    text?: boolean
    is_correct?: boolean
  }

  export type AnswerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionArgs<ExtArgs>
  }


  type AnswerGetPayload<S extends boolean | null | undefined | AnswerArgs> = $Types.GetResult<AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AnswerFindManyArgs, 'select' | 'include'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnswerFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Answer'> extends True ? Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Answer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnswerFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Answer'> extends True ? Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Answer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnswerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
    **/
    create<T extends AnswerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Answers.
     *     @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     *     @example
     *     // Create many Answers
     *     const answer = await prisma.answer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnswerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
    **/
    delete<T extends AnswerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnswerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnswerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnswerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
    **/
    upsert<T extends AnswerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>
    ): Prisma__AnswerClient<$Types.GetResult<AnswerPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    question<T extends QuestionArgs<ExtArgs> = {}>(args?: Subset<T, QuestionArgs<ExtArgs>>): Prisma__QuestionClient<$Types.GetResult<QuestionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Answer base type for findUnique actions
   */
  export type AnswerFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUnique
   */
  export interface AnswerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AnswerFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer base type for findFirst actions
   */
  export type AnswerFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }

  /**
   * Answer findFirst
   */
  export interface AnswerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AnswerFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: Enumerable<AnswerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: Enumerable<AnswerScalarFieldEnum>
  }


  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }


  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: Enumerable<AnswerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
  }


  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }


  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }


  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
  }


  /**
   * Answer without action
   */
  export type AnswerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnswerInclude<ExtArgs> | null
  }



  /**
   * Model ExamResult
   */


  export type AggregateExamResult = {
    _count: ExamResultCountAggregateOutputType | null
    _avg: ExamResultAvgAggregateOutputType | null
    _sum: ExamResultSumAggregateOutputType | null
    _min: ExamResultMinAggregateOutputType | null
    _max: ExamResultMaxAggregateOutputType | null
  }

  export type ExamResultAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    exam_id: number | null
    score: number | null
  }

  export type ExamResultSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    exam_id: number | null
    score: number | null
  }

  export type ExamResultMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    exam_id: number | null
    score: number | null
    submitted_at: Date | null
  }

  export type ExamResultMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    exam_id: number | null
    score: number | null
    submitted_at: Date | null
  }

  export type ExamResultCountAggregateOutputType = {
    id: number
    user_id: number
    exam_id: number
    score: number
    submitted_at: number
    _all: number
  }


  export type ExamResultAvgAggregateInputType = {
    id?: true
    user_id?: true
    exam_id?: true
    score?: true
  }

  export type ExamResultSumAggregateInputType = {
    id?: true
    user_id?: true
    exam_id?: true
    score?: true
  }

  export type ExamResultMinAggregateInputType = {
    id?: true
    user_id?: true
    exam_id?: true
    score?: true
    submitted_at?: true
  }

  export type ExamResultMaxAggregateInputType = {
    id?: true
    user_id?: true
    exam_id?: true
    score?: true
    submitted_at?: true
  }

  export type ExamResultCountAggregateInputType = {
    id?: true
    user_id?: true
    exam_id?: true
    score?: true
    submitted_at?: true
    _all?: true
  }

  export type ExamResultAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResult to aggregate.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamResults
    **/
    _count?: true | ExamResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamResultMaxAggregateInputType
  }

  export type GetExamResultAggregateType<T extends ExamResultAggregateArgs> = {
        [P in keyof T & keyof AggregateExamResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamResult[P]>
      : GetScalarType<T[P], AggregateExamResult[P]>
  }




  export type ExamResultGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExamResultWhereInput
    orderBy?: Enumerable<ExamResultOrderByWithAggregationInput>
    by: ExamResultScalarFieldEnum[]
    having?: ExamResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamResultCountAggregateInputType | true
    _avg?: ExamResultAvgAggregateInputType
    _sum?: ExamResultSumAggregateInputType
    _min?: ExamResultMinAggregateInputType
    _max?: ExamResultMaxAggregateInputType
  }


  export type ExamResultGroupByOutputType = {
    id: number
    user_id: number
    exam_id: number
    score: number
    submitted_at: Date
    _count: ExamResultCountAggregateOutputType | null
    _avg: ExamResultAvgAggregateOutputType | null
    _sum: ExamResultSumAggregateOutputType | null
    _min: ExamResultMinAggregateOutputType | null
    _max: ExamResultMaxAggregateOutputType | null
  }

  type GetExamResultGroupByPayload<T extends ExamResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExamResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamResultGroupByOutputType[P]>
            : GetScalarType<T[P], ExamResultGroupByOutputType[P]>
        }
      >
    >


  export type ExamResultSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    exam_id?: boolean
    score?: boolean
    submitted_at?: boolean
    user?: boolean | UserArgs<ExtArgs>
    exam?: boolean | ExamArgs<ExtArgs>
  }, ExtArgs["result"]["examResult"]>

  export type ExamResultSelectScalar = {
    id?: boolean
    user_id?: boolean
    exam_id?: boolean
    score?: boolean
    submitted_at?: boolean
  }

  export type ExamResultInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    exam?: boolean | ExamArgs<ExtArgs>
  }


  type ExamResultGetPayload<S extends boolean | null | undefined | ExamResultArgs> = $Types.GetResult<ExamResultPayload, S>

  type ExamResultCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExamResultFindManyArgs, 'select' | 'include'> & {
      select?: ExamResultCountAggregateInputType | true
    }

  export interface ExamResultDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamResult'], meta: { name: 'ExamResult' } }
    /**
     * Find zero or one ExamResult that matches the filter.
     * @param {ExamResultFindUniqueArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamResultFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExamResultFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExamResult'> extends True ? Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ExamResult that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExamResultFindUniqueOrThrowArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamResultFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamResultFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ExamResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindFirstArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamResultFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExamResultFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExamResult'> extends True ? Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ExamResult that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindFirstOrThrowArgs} args - Arguments to find a ExamResult
     * @example
     * // Get one ExamResult
     * const examResult = await prisma.examResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamResultFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamResultFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ExamResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamResults
     * const examResults = await prisma.examResult.findMany()
     * 
     * // Get first 10 ExamResults
     * const examResults = await prisma.examResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examResultWithIdOnly = await prisma.examResult.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExamResultFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamResultFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ExamResult.
     * @param {ExamResultCreateArgs} args - Arguments to create a ExamResult.
     * @example
     * // Create one ExamResult
     * const ExamResult = await prisma.examResult.create({
     *   data: {
     *     // ... data to create a ExamResult
     *   }
     * })
     * 
    **/
    create<T extends ExamResultCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamResultCreateArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ExamResults.
     *     @param {ExamResultCreateManyArgs} args - Arguments to create many ExamResults.
     *     @example
     *     // Create many ExamResults
     *     const examResult = await prisma.examResult.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamResultCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamResultCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExamResult.
     * @param {ExamResultDeleteArgs} args - Arguments to delete one ExamResult.
     * @example
     * // Delete one ExamResult
     * const ExamResult = await prisma.examResult.delete({
     *   where: {
     *     // ... filter to delete one ExamResult
     *   }
     * })
     * 
    **/
    delete<T extends ExamResultDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExamResultDeleteArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ExamResult.
     * @param {ExamResultUpdateArgs} args - Arguments to update one ExamResult.
     * @example
     * // Update one ExamResult
     * const examResult = await prisma.examResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamResultUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamResultUpdateArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ExamResults.
     * @param {ExamResultDeleteManyArgs} args - Arguments to filter ExamResults to delete.
     * @example
     * // Delete a few ExamResults
     * const { count } = await prisma.examResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamResultDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamResultDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamResults
     * const examResult = await prisma.examResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamResultUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExamResultUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamResult.
     * @param {ExamResultUpsertArgs} args - Arguments to update or create a ExamResult.
     * @example
     * // Update or create a ExamResult
     * const examResult = await prisma.examResult.upsert({
     *   create: {
     *     // ... data to create a ExamResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamResult we want to update
     *   }
     * })
    **/
    upsert<T extends ExamResultUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExamResultUpsertArgs<ExtArgs>>
    ): Prisma__ExamResultClient<$Types.GetResult<ExamResultPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultCountArgs} args - Arguments to filter ExamResults to count.
     * @example
     * // Count the number of ExamResults
     * const count = await prisma.examResult.count({
     *   where: {
     *     // ... the filter for the ExamResults we want to count
     *   }
     * })
    **/
    count<T extends ExamResultCountArgs>(
      args?: Subset<T, ExamResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamResultAggregateArgs>(args: Subset<T, ExamResultAggregateArgs>): Prisma.PrismaPromise<GetExamResultAggregateType<T>>

    /**
     * Group by ExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamResultGroupByArgs} args - Group by arguments.
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
      T extends ExamResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamResultGroupByArgs['orderBy'] }
        : { orderBy?: ExamResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExamResultClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    exam<T extends ExamArgs<ExtArgs> = {}>(args?: Subset<T, ExamArgs<ExtArgs>>): Prisma__ExamClient<$Types.GetResult<ExamPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ExamResult base type for findUnique actions
   */
  export type ExamResultFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where: ExamResultWhereUniqueInput
  }

  /**
   * ExamResult findUnique
   */
  export interface ExamResultFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExamResultFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExamResult findUniqueOrThrow
   */
  export type ExamResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where: ExamResultWhereUniqueInput
  }


  /**
   * ExamResult base type for findFirst actions
   */
  export type ExamResultFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResults.
     */
    distinct?: Enumerable<ExamResultScalarFieldEnum>
  }

  /**
   * ExamResult findFirst
   */
  export interface ExamResultFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExamResultFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExamResult findFirstOrThrow
   */
  export type ExamResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResult to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamResults.
     */
    distinct?: Enumerable<ExamResultScalarFieldEnum>
  }


  /**
   * ExamResult findMany
   */
  export type ExamResultFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter, which ExamResults to fetch.
     */
    where?: ExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamResults to fetch.
     */
    orderBy?: Enumerable<ExamResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamResults.
     */
    cursor?: ExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamResults.
     */
    skip?: number
    distinct?: Enumerable<ExamResultScalarFieldEnum>
  }


  /**
   * ExamResult create
   */
  export type ExamResultCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamResult.
     */
    data: XOR<ExamResultCreateInput, ExamResultUncheckedCreateInput>
  }


  /**
   * ExamResult createMany
   */
  export type ExamResultCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamResults.
     */
    data: Enumerable<ExamResultCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExamResult update
   */
  export type ExamResultUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamResult.
     */
    data: XOR<ExamResultUpdateInput, ExamResultUncheckedUpdateInput>
    /**
     * Choose, which ExamResult to update.
     */
    where: ExamResultWhereUniqueInput
  }


  /**
   * ExamResult updateMany
   */
  export type ExamResultUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamResults.
     */
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyInput>
    /**
     * Filter which ExamResults to update
     */
    where?: ExamResultWhereInput
  }


  /**
   * ExamResult upsert
   */
  export type ExamResultUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamResult to update in case it exists.
     */
    where: ExamResultWhereUniqueInput
    /**
     * In case the ExamResult found by the `where` argument doesn't exist, create a new ExamResult with this data.
     */
    create: XOR<ExamResultCreateInput, ExamResultUncheckedCreateInput>
    /**
     * In case the ExamResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamResultUpdateInput, ExamResultUncheckedUpdateInput>
  }


  /**
   * ExamResult delete
   */
  export type ExamResultDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
    /**
     * Filter which ExamResult to delete.
     */
    where: ExamResultWhereUniqueInput
  }


  /**
   * ExamResult deleteMany
   */
  export type ExamResultDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamResults to delete
     */
    where?: ExamResultWhereInput
  }


  /**
   * ExamResult without action
   */
  export type ExamResultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamResult
     */
    select?: ExamResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamResultInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    registration: 'registration',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LearningPathScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    created_at: 'created_at'
  };

  export type LearningPathScalarFieldEnum = (typeof LearningPathScalarFieldEnum)[keyof typeof LearningPathScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    scorm_path: 'scorm_path',
    created_at: 'created_at'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LearningPathCourseScalarFieldEnum: {
    id: 'id',
    learning_path_id: 'learning_path_id',
    course_id: 'course_id'
  };

  export type LearningPathCourseScalarFieldEnum = (typeof LearningPathCourseScalarFieldEnum)[keyof typeof LearningPathCourseScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    group_id: 'group_id',
    learning_path_id: 'learning_path_id',
    created_at: 'created_at'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    percentage: 'percentage',
    started_at: 'started_at',
    completed_at: 'completed_at'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    title: 'title',
    created_at: 'created_at'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    exam_id: 'exam_id',
    text: 'text'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    text: 'text',
    is_correct: 'is_correct'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const ExamResultScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    exam_id: 'exam_id',
    score: 'score',
    submitted_at: 'submitted_at'
  };

  export type ExamResultScalarFieldEnum = (typeof ExamResultScalarFieldEnum)[keyof typeof ExamResultScalarFieldEnum]


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    registration?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    enrollments?: EnrollmentListRelationFilter
    progress?: ProgressListRelationFilter
    examResults?: ExamResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration?: SortOrder
    created_at?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
    progress?: ProgressOrderByRelationAggregateInput
    examResults?: ExamResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    registration?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    registration?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LearningPathWhereInput = {
    AND?: Enumerable<LearningPathWhereInput>
    OR?: Enumerable<LearningPathWhereInput>
    NOT?: Enumerable<LearningPathWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    courses?: LearningPathCourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type LearningPathOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    courses?: LearningPathCourseOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type LearningPathWhereUniqueInput = {
    id?: number
  }

  export type LearningPathOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: LearningPathCountOrderByAggregateInput
    _avg?: LearningPathAvgOrderByAggregateInput
    _max?: LearningPathMaxOrderByAggregateInput
    _min?: LearningPathMinOrderByAggregateInput
    _sum?: LearningPathSumOrderByAggregateInput
  }

  export type LearningPathScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LearningPathScalarWhereWithAggregatesInput>
    OR?: Enumerable<LearningPathScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LearningPathScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CourseWhereInput = {
    AND?: Enumerable<CourseWhereInput>
    OR?: Enumerable<CourseWhereInput>
    NOT?: Enumerable<CourseWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    scorm_path?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    paths?: LearningPathCourseListRelationFilter
    progress?: ProgressListRelationFilter
    exams?: ExamListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scorm_path?: SortOrder
    created_at?: SortOrder
    paths?: LearningPathCourseOrderByRelationAggregateInput
    progress?: ProgressOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = {
    id?: number
  }

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scorm_path?: SortOrder
    created_at?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    scorm_path?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LearningPathCourseWhereInput = {
    AND?: Enumerable<LearningPathCourseWhereInput>
    OR?: Enumerable<LearningPathCourseWhereInput>
    NOT?: Enumerable<LearningPathCourseWhereInput>
    id?: IntFilter | number
    learning_path_id?: IntFilter | number
    course_id?: IntFilter | number
    learning_path?: XOR<LearningPathRelationFilter, LearningPathWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type LearningPathCourseOrderByWithRelationInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
    learning_path?: LearningPathOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type LearningPathCourseWhereUniqueInput = {
    id?: number
  }

  export type LearningPathCourseOrderByWithAggregationInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
    _count?: LearningPathCourseCountOrderByAggregateInput
    _avg?: LearningPathCourseAvgOrderByAggregateInput
    _max?: LearningPathCourseMaxOrderByAggregateInput
    _min?: LearningPathCourseMinOrderByAggregateInput
    _sum?: LearningPathCourseSumOrderByAggregateInput
  }

  export type LearningPathCourseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LearningPathCourseScalarWhereWithAggregatesInput>
    OR?: Enumerable<LearningPathCourseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LearningPathCourseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    learning_path_id?: IntWithAggregatesFilter | number
    course_id?: IntWithAggregatesFilter | number
  }

  export type GroupWhereInput = {
    AND?: Enumerable<GroupWhereInput>
    OR?: Enumerable<GroupWhereInput>
    NOT?: Enumerable<GroupWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    enrollments?: EnrollmentListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = {
    id?: number
  }

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: Enumerable<EnrollmentWhereInput>
    OR?: Enumerable<EnrollmentWhereInput>
    NOT?: Enumerable<EnrollmentWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    group_id?: IntFilter | number
    learning_path_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    learning_path?: XOR<LearningPathRelationFilter, LearningPathWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    learning_path?: LearningPathOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = {
    id?: number
  }

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
    created_at?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EnrollmentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    group_id?: IntWithAggregatesFilter | number
    learning_path_id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProgressWhereInput = {
    AND?: Enumerable<ProgressWhereInput>
    OR?: Enumerable<ProgressWhereInput>
    NOT?: Enumerable<ProgressWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    course_id?: IntFilter | number
    percentage?: FloatFilter | number
    started_at?: DateTimeFilter | Date | string
    completed_at?: DateTimeNullableFilter | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type ProgressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type ProgressWhereUniqueInput = {
    id?: number
  }

  export type ProgressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: ProgressCountOrderByAggregateInput
    _avg?: ProgressAvgOrderByAggregateInput
    _max?: ProgressMaxOrderByAggregateInput
    _min?: ProgressMinOrderByAggregateInput
    _sum?: ProgressSumOrderByAggregateInput
  }

  export type ProgressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProgressScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProgressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProgressScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    course_id?: IntWithAggregatesFilter | number
    percentage?: FloatWithAggregatesFilter | number
    started_at?: DateTimeWithAggregatesFilter | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ExamWhereInput = {
    AND?: Enumerable<ExamWhereInput>
    OR?: Enumerable<ExamWhereInput>
    NOT?: Enumerable<ExamWhereInput>
    id?: IntFilter | number
    course_id?: IntFilter | number
    title?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    questions?: QuestionListRelationFilter
    results?: ExamResultListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    course?: CourseOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    results?: ExamResultOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = {
    id?: number
  }

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExamScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    course_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: IntFilter | number
    exam_id?: IntFilter | number
    text?: StringFilter | string
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    text?: SortOrder
    exam?: ExamOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = {
    id?: number
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    text?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    exam_id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
  }

  export type AnswerWhereInput = {
    AND?: Enumerable<AnswerWhereInput>
    OR?: Enumerable<AnswerWhereInput>
    NOT?: Enumerable<AnswerWhereInput>
    id?: IntFilter | number
    question_id?: IntFilter | number
    text?: StringFilter | string
    is_correct?: BoolFilter | boolean
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = {
    id?: number
  }

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnswerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    question_id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    is_correct?: BoolWithAggregatesFilter | boolean
  }

  export type ExamResultWhereInput = {
    AND?: Enumerable<ExamResultWhereInput>
    OR?: Enumerable<ExamResultWhereInput>
    NOT?: Enumerable<ExamResultWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    exam_id?: IntFilter | number
    score?: FloatFilter | number
    submitted_at?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
  }

  export type ExamResultOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
    submitted_at?: SortOrder
    user?: UserOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type ExamResultWhereUniqueInput = {
    id?: number
  }

  export type ExamResultOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
    submitted_at?: SortOrder
    _count?: ExamResultCountOrderByAggregateInput
    _avg?: ExamResultAvgOrderByAggregateInput
    _max?: ExamResultMaxOrderByAggregateInput
    _min?: ExamResultMinOrderByAggregateInput
    _sum?: ExamResultSumOrderByAggregateInput
  }

  export type ExamResultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExamResultScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExamResultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExamResultScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    exam_id?: IntWithAggregatesFilter | number
    score?: FloatWithAggregatesFilter | number
    submitted_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCreateInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    courses?: LearningPathCourseCreateNestedManyWithoutLearning_pathInput
    enrollments?: EnrollmentCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    created_at?: Date | string
    courses?: LearningPathCourseUncheckedCreateNestedManyWithoutLearning_pathInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: LearningPathCourseUpdateManyWithoutLearning_pathNestedInput
    enrollments?: EnrollmentUpdateManyWithoutLearning_pathNestedInput
  }

  export type LearningPathUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: LearningPathCourseUncheckedUpdateManyWithoutLearning_pathNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutLearning_pathNestedInput
  }

  export type LearningPathCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    created_at?: Date | string
  }

  export type LearningPathUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseCreateNestedManyWithoutCourseInput
    progress?: ProgressCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseUncheckedCreateNestedManyWithoutCourseInput
    progress?: ProgressUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUpdateManyWithoutCourseNestedInput
    progress?: ProgressUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUncheckedUpdateManyWithoutCourseNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCourseCreateInput = {
    learning_path: LearningPathCreateNestedOneWithoutCoursesInput
    course: CourseCreateNestedOneWithoutPathsInput
  }

  export type LearningPathCourseUncheckedCreateInput = {
    id?: number
    learning_path_id: number
    course_id: number
  }

  export type LearningPathCourseUpdateInput = {
    learning_path?: LearningPathUpdateOneRequiredWithoutCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutPathsNestedInput
  }

  export type LearningPathCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type LearningPathCourseCreateManyInput = {
    id?: number
    learning_path_id: number
    course_id: number
  }

  export type LearningPathCourseUpdateManyMutationInput = {

  }

  export type LearningPathCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateInput = {
    name: string
    created_at?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    group: GroupCreateNestedOneWithoutEnrollmentsInput
    learning_path: LearningPathCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    user_id: number
    group_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type EnrollmentUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
    learning_path?: LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    user_id: number
    group_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateInput = {
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    user: UserCreateNestedOneWithoutProgressInput
    course: CourseCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateInput = {
    id?: number
    user_id: number
    course_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ProgressUpdateInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressCreateManyInput = {
    id?: number
    user_id: number
    course_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ProgressUpdateManyMutationInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamCreateInput = {
    title: string
    created_at?: Date | string
    course: CourseCreateNestedOneWithoutExamsInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ExamResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: number
    course_id: number
    title: string
    created_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ExamResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutExamsNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ExamResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ExamResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: number
    course_id: number
    title: string
    created_at?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    text: string
    exam: ExamCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    exam_id: number
    text: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    exam_id: number
    text: string
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    text: string
    is_correct?: boolean
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    question_id: number
    text: string
    is_correct?: boolean
  }

  export type AnswerUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerCreateManyInput = {
    id?: number
    question_id: number
    text: string
    is_correct?: boolean
  }

  export type AnswerUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamResultCreateInput = {
    score: number
    submitted_at?: Date | string
    user: UserCreateNestedOneWithoutExamResultsInput
    exam: ExamCreateNestedOneWithoutResultsInput
  }

  export type ExamResultUncheckedCreateInput = {
    id?: number
    user_id: number
    exam_id: number
    score: number
    submitted_at?: Date | string
  }

  export type ExamResultUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExamResultsNestedInput
    exam?: ExamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ExamResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultCreateManyInput = {
    id?: number
    user_id: number
    exam_id: number
    score: number
    submitted_at?: Date | string
  }

  export type ExamResultUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type ProgressListRelationFilter = {
    every?: ProgressWhereInput
    some?: ProgressWhereInput
    none?: ProgressWhereInput
  }

  export type ExamResultListRelationFilter = {
    every?: ExamResultWhereInput
    some?: ExamResultWhereInput
    none?: ExamResultWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registration?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type LearningPathCourseListRelationFilter = {
    every?: LearningPathCourseWhereInput
    some?: LearningPathCourseWhereInput
    none?: LearningPathCourseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LearningPathCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPathCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LearningPathAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LearningPathMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LearningPathMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type LearningPathSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scorm_path?: SortOrder
    created_at?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scorm_path?: SortOrder
    created_at?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scorm_path?: SortOrder
    created_at?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LearningPathRelationFilter = {
    is?: LearningPathWhereInput | null
    isNot?: LearningPathWhereInput | null
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type LearningPathCourseCountOrderByAggregateInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
  }

  export type LearningPathCourseAvgOrderByAggregateInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
  }

  export type LearningPathCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
  }

  export type LearningPathCourseMinOrderByAggregateInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
  }

  export type LearningPathCourseSumOrderByAggregateInput = {
    id?: SortOrder
    learning_path_id?: SortOrder
    course_id?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
    learning_path_id?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ProgressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type ProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
  }

  export type ProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type ProgressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type ProgressSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
  }

  export type ExamRelationFilter = {
    is?: ExamWhereInput | null
    isNot?: ExamWhereInput | null
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    text?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    text?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    text?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    is_correct?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ExamResultCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
    submitted_at?: SortOrder
  }

  export type ExamResultAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
  }

  export type ExamResultMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
    submitted_at?: SortOrder
  }

  export type ExamResultMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
    submitted_at?: SortOrder
  }

  export type ExamResultSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    exam_id?: SortOrder
    score?: SortOrder
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type ProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutUserInput>, Enumerable<ProgressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutUserInput>
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: Enumerable<ProgressWhereUniqueInput>
  }

  export type ExamResultCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutUserInput>, Enumerable<ExamResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutUserInput>
    createMany?: ExamResultCreateManyUserInputEnvelope
    connect?: Enumerable<ExamResultWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type ProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutUserInput>, Enumerable<ProgressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutUserInput>
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: Enumerable<ProgressWhereUniqueInput>
  }

  export type ExamResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutUserInput>, Enumerable<ExamResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutUserInput>
    createMany?: ExamResultCreateManyUserInputEnvelope
    connect?: Enumerable<ExamResultWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type ProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutUserInput>, Enumerable<ProgressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProgressUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: Enumerable<ProgressWhereUniqueInput>
    disconnect?: Enumerable<ProgressWhereUniqueInput>
    delete?: Enumerable<ProgressWhereUniqueInput>
    connect?: Enumerable<ProgressWhereUniqueInput>
    update?: Enumerable<ProgressUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProgressUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProgressScalarWhereInput>
  }

  export type ExamResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutUserInput>, Enumerable<ExamResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExamResultUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExamResultCreateManyUserInputEnvelope
    set?: Enumerable<ExamResultWhereUniqueInput>
    disconnect?: Enumerable<ExamResultWhereUniqueInput>
    delete?: Enumerable<ExamResultWhereUniqueInput>
    connect?: Enumerable<ExamResultWhereUniqueInput>
    update?: Enumerable<ExamResultUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExamResultUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExamResultScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutUserInput>, Enumerable<EnrollmentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type ProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutUserInput>, Enumerable<ProgressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProgressUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: Enumerable<ProgressWhereUniqueInput>
    disconnect?: Enumerable<ProgressWhereUniqueInput>
    delete?: Enumerable<ProgressWhereUniqueInput>
    connect?: Enumerable<ProgressWhereUniqueInput>
    update?: Enumerable<ProgressUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProgressUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProgressScalarWhereInput>
  }

  export type ExamResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutUserInput>, Enumerable<ExamResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExamResultUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExamResultCreateManyUserInputEnvelope
    set?: Enumerable<ExamResultWhereUniqueInput>
    disconnect?: Enumerable<ExamResultWhereUniqueInput>
    delete?: Enumerable<ExamResultWhereUniqueInput>
    connect?: Enumerable<ExamResultWhereUniqueInput>
    update?: Enumerable<ExamResultUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExamResultUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExamResultScalarWhereInput>
  }

  export type LearningPathCourseCreateNestedManyWithoutLearning_pathInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutLearning_pathInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutLearning_pathInput>
    createMany?: LearningPathCourseCreateManyLearning_pathInputEnvelope
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
  }

  export type EnrollmentCreateNestedManyWithoutLearning_pathInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutLearning_pathInput>, Enumerable<EnrollmentUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutLearning_pathInput>
    createMany?: EnrollmentCreateManyLearning_pathInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type LearningPathCourseUncheckedCreateNestedManyWithoutLearning_pathInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutLearning_pathInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutLearning_pathInput>
    createMany?: LearningPathCourseCreateManyLearning_pathInputEnvelope
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutLearning_pathInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutLearning_pathInput>, Enumerable<EnrollmentUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutLearning_pathInput>
    createMany?: EnrollmentCreateManyLearning_pathInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LearningPathCourseUpdateManyWithoutLearning_pathNestedInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutLearning_pathInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutLearning_pathInput>
    upsert?: Enumerable<LearningPathCourseUpsertWithWhereUniqueWithoutLearning_pathInput>
    createMany?: LearningPathCourseCreateManyLearning_pathInputEnvelope
    set?: Enumerable<LearningPathCourseWhereUniqueInput>
    disconnect?: Enumerable<LearningPathCourseWhereUniqueInput>
    delete?: Enumerable<LearningPathCourseWhereUniqueInput>
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
    update?: Enumerable<LearningPathCourseUpdateWithWhereUniqueWithoutLearning_pathInput>
    updateMany?: Enumerable<LearningPathCourseUpdateManyWithWhereWithoutLearning_pathInput>
    deleteMany?: Enumerable<LearningPathCourseScalarWhereInput>
  }

  export type EnrollmentUpdateManyWithoutLearning_pathNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutLearning_pathInput>, Enumerable<EnrollmentUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutLearning_pathInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutLearning_pathInput>
    createMany?: EnrollmentCreateManyLearning_pathInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutLearning_pathInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutLearning_pathInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type LearningPathCourseUncheckedUpdateManyWithoutLearning_pathNestedInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutLearning_pathInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutLearning_pathInput>
    upsert?: Enumerable<LearningPathCourseUpsertWithWhereUniqueWithoutLearning_pathInput>
    createMany?: LearningPathCourseCreateManyLearning_pathInputEnvelope
    set?: Enumerable<LearningPathCourseWhereUniqueInput>
    disconnect?: Enumerable<LearningPathCourseWhereUniqueInput>
    delete?: Enumerable<LearningPathCourseWhereUniqueInput>
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
    update?: Enumerable<LearningPathCourseUpdateWithWhereUniqueWithoutLearning_pathInput>
    updateMany?: Enumerable<LearningPathCourseUpdateManyWithWhereWithoutLearning_pathInput>
    deleteMany?: Enumerable<LearningPathCourseScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutLearning_pathNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutLearning_pathInput>, Enumerable<EnrollmentUncheckedCreateWithoutLearning_pathInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutLearning_pathInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutLearning_pathInput>
    createMany?: EnrollmentCreateManyLearning_pathInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutLearning_pathInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutLearning_pathInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type LearningPathCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutCourseInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutCourseInput>
    createMany?: LearningPathCourseCreateManyCourseInputEnvelope
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
  }

  export type ProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutCourseInput>, Enumerable<ProgressUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutCourseInput>
    createMany?: ProgressCreateManyCourseInputEnvelope
    connect?: Enumerable<ProgressWhereUniqueInput>
  }

  export type ExamCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<ExamCreateWithoutCourseInput>, Enumerable<ExamUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ExamCreateOrConnectWithoutCourseInput>
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: Enumerable<ExamWhereUniqueInput>
  }

  export type LearningPathCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutCourseInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutCourseInput>
    createMany?: LearningPathCourseCreateManyCourseInputEnvelope
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
  }

  export type ProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutCourseInput>, Enumerable<ProgressUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutCourseInput>
    createMany?: ProgressCreateManyCourseInputEnvelope
    connect?: Enumerable<ProgressWhereUniqueInput>
  }

  export type ExamUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<Enumerable<ExamCreateWithoutCourseInput>, Enumerable<ExamUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ExamCreateOrConnectWithoutCourseInput>
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: Enumerable<ExamWhereUniqueInput>
  }

  export type LearningPathCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutCourseInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<LearningPathCourseUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: LearningPathCourseCreateManyCourseInputEnvelope
    set?: Enumerable<LearningPathCourseWhereUniqueInput>
    disconnect?: Enumerable<LearningPathCourseWhereUniqueInput>
    delete?: Enumerable<LearningPathCourseWhereUniqueInput>
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
    update?: Enumerable<LearningPathCourseUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<LearningPathCourseUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<LearningPathCourseScalarWhereInput>
  }

  export type ProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutCourseInput>, Enumerable<ProgressUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<ProgressUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: ProgressCreateManyCourseInputEnvelope
    set?: Enumerable<ProgressWhereUniqueInput>
    disconnect?: Enumerable<ProgressWhereUniqueInput>
    delete?: Enumerable<ProgressWhereUniqueInput>
    connect?: Enumerable<ProgressWhereUniqueInput>
    update?: Enumerable<ProgressUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<ProgressUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<ProgressScalarWhereInput>
  }

  export type ExamUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<ExamCreateWithoutCourseInput>, Enumerable<ExamUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ExamCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<ExamUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: Enumerable<ExamWhereUniqueInput>
    disconnect?: Enumerable<ExamWhereUniqueInput>
    delete?: Enumerable<ExamWhereUniqueInput>
    connect?: Enumerable<ExamWhereUniqueInput>
    update?: Enumerable<ExamUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<ExamUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<ExamScalarWhereInput>
  }

  export type LearningPathCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<LearningPathCourseCreateWithoutCourseInput>, Enumerable<LearningPathCourseUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<LearningPathCourseCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<LearningPathCourseUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: LearningPathCourseCreateManyCourseInputEnvelope
    set?: Enumerable<LearningPathCourseWhereUniqueInput>
    disconnect?: Enumerable<LearningPathCourseWhereUniqueInput>
    delete?: Enumerable<LearningPathCourseWhereUniqueInput>
    connect?: Enumerable<LearningPathCourseWhereUniqueInput>
    update?: Enumerable<LearningPathCourseUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<LearningPathCourseUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<LearningPathCourseScalarWhereInput>
  }

  export type ProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<ProgressCreateWithoutCourseInput>, Enumerable<ProgressUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ProgressCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<ProgressUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: ProgressCreateManyCourseInputEnvelope
    set?: Enumerable<ProgressWhereUniqueInput>
    disconnect?: Enumerable<ProgressWhereUniqueInput>
    delete?: Enumerable<ProgressWhereUniqueInput>
    connect?: Enumerable<ProgressWhereUniqueInput>
    update?: Enumerable<ProgressUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<ProgressUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<ProgressScalarWhereInput>
  }

  export type ExamUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<Enumerable<ExamCreateWithoutCourseInput>, Enumerable<ExamUncheckedCreateWithoutCourseInput>>
    connectOrCreate?: Enumerable<ExamCreateOrConnectWithoutCourseInput>
    upsert?: Enumerable<ExamUpsertWithWhereUniqueWithoutCourseInput>
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: Enumerable<ExamWhereUniqueInput>
    disconnect?: Enumerable<ExamWhereUniqueInput>
    delete?: Enumerable<ExamWhereUniqueInput>
    connect?: Enumerable<ExamWhereUniqueInput>
    update?: Enumerable<ExamUpdateWithWhereUniqueWithoutCourseInput>
    updateMany?: Enumerable<ExamUpdateManyWithWhereWithoutCourseInput>
    deleteMany?: Enumerable<ExamScalarWhereInput>
  }

  export type LearningPathCreateNestedOneWithoutCoursesInput = {
    create?: XOR<LearningPathCreateWithoutCoursesInput, LearningPathUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutCoursesInput
    connect?: LearningPathWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutPathsInput = {
    create?: XOR<CourseCreateWithoutPathsInput, CourseUncheckedCreateWithoutPathsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPathsInput
    connect?: CourseWhereUniqueInput
  }

  export type LearningPathUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<LearningPathCreateWithoutCoursesInput, LearningPathUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutCoursesInput
    upsert?: LearningPathUpsertWithoutCoursesInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<LearningPathUpdateWithoutCoursesInput, LearningPathUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutPathsNestedInput = {
    create?: XOR<CourseCreateWithoutPathsInput, CourseUncheckedCreateWithoutPathsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPathsInput
    upsert?: CourseUpsertWithoutPathsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutPathsInput, CourseUncheckedUpdateWithoutPathsInput>
  }

  export type EnrollmentCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutGroupInput>, Enumerable<EnrollmentUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutGroupInput>
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutGroupInput>, Enumerable<EnrollmentUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutGroupInput>
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    connect?: Enumerable<EnrollmentWhereUniqueInput>
  }

  export type EnrollmentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutGroupInput>, Enumerable<EnrollmentUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<EnrollmentCreateWithoutGroupInput>, Enumerable<EnrollmentUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<EnrollmentCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<EnrollmentUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: EnrollmentCreateManyGroupInputEnvelope
    set?: Enumerable<EnrollmentWhereUniqueInput>
    disconnect?: Enumerable<EnrollmentWhereUniqueInput>
    delete?: Enumerable<EnrollmentWhereUniqueInput>
    connect?: Enumerable<EnrollmentWhereUniqueInput>
    update?: Enumerable<EnrollmentUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<EnrollmentUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<EnrollmentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEnrollmentsInput
    connect?: GroupWhereUniqueInput
  }

  export type LearningPathCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutEnrollmentsInput
    connect?: LearningPathWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type GroupUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEnrollmentsInput
    upsert?: GroupUpsertWithoutEnrollmentsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutEnrollmentsInput, GroupUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutEnrollmentsInput
    upsert?: LearningPathUpsertWithoutEnrollmentsInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<LearningPathUpdateWithoutEnrollmentsInput, LearningPathUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutProgressInput = {
    create?: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgressInput
    connect?: CourseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type CourseUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutProgressInput
    upsert?: CourseUpsertWithoutProgressInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutProgressInput, CourseUncheckedUpdateWithoutProgressInput>
  }

  export type CourseCreateNestedOneWithoutExamsInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    connect?: CourseWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutExamInput>, Enumerable<QuestionUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutExamInput>
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type ExamResultCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutExamInput>, Enumerable<ExamResultUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutExamInput>
    createMany?: ExamResultCreateManyExamInputEnvelope
    connect?: Enumerable<ExamResultWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutExamInput>, Enumerable<QuestionUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutExamInput>
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type ExamResultUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutExamInput>, Enumerable<ExamResultUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutExamInput>
    createMany?: ExamResultCreateManyExamInputEnvelope
    connect?: Enumerable<ExamResultWhereUniqueInput>
  }

  export type CourseUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    upsert?: CourseUpsertWithoutExamsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutExamInput>, Enumerable<QuestionUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutExamInput>
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type ExamResultUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutExamInput>, Enumerable<ExamResultUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<ExamResultUpsertWithWhereUniqueWithoutExamInput>
    createMany?: ExamResultCreateManyExamInputEnvelope
    set?: Enumerable<ExamResultWhereUniqueInput>
    disconnect?: Enumerable<ExamResultWhereUniqueInput>
    delete?: Enumerable<ExamResultWhereUniqueInput>
    connect?: Enumerable<ExamResultWhereUniqueInput>
    update?: Enumerable<ExamResultUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<ExamResultUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<ExamResultScalarWhereInput>
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutExamInput>, Enumerable<QuestionUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutExamInput>
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type ExamResultUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<Enumerable<ExamResultCreateWithoutExamInput>, Enumerable<ExamResultUncheckedCreateWithoutExamInput>>
    connectOrCreate?: Enumerable<ExamResultCreateOrConnectWithoutExamInput>
    upsert?: Enumerable<ExamResultUpsertWithWhereUniqueWithoutExamInput>
    createMany?: ExamResultCreateManyExamInputEnvelope
    set?: Enumerable<ExamResultWhereUniqueInput>
    disconnect?: Enumerable<ExamResultWhereUniqueInput>
    delete?: Enumerable<ExamResultWhereUniqueInput>
    connect?: Enumerable<ExamResultWhereUniqueInput>
    update?: Enumerable<ExamResultUpdateWithWhereUniqueWithoutExamInput>
    updateMany?: Enumerable<ExamResultUpdateManyWithWhereWithoutExamInput>
    deleteMany?: Enumerable<ExamResultScalarWhereInput>
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: Enumerable<AnswerWhereUniqueInput>
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<AnswerCreateWithoutQuestionInput>, Enumerable<AnswerUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<AnswerCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<AnswerUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: Enumerable<AnswerWhereUniqueInput>
    disconnect?: Enumerable<AnswerWhereUniqueInput>
    delete?: Enumerable<AnswerWhereUniqueInput>
    connect?: Enumerable<AnswerWhereUniqueInput>
    update?: Enumerable<AnswerUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<AnswerUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<AnswerScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutExamResultsInput = {
    create?: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamResultsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutResultsInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExamResultsNestedInput = {
    create?: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamResultsInput
    upsert?: UserUpsertWithoutExamResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutExamResultsInput, UserUncheckedUpdateWithoutExamResultsInput>
  }

  export type ExamUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    upsert?: ExamUpsertWithoutResultsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnrollmentCreateWithoutUserInput = {
    created_at?: Date | string
    group: GroupCreateNestedOneWithoutEnrollmentsInput
    learning_path: LearningPathCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: number
    group_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProgressCreateWithoutUserInput = {
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    course: CourseCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateWithoutUserInput = {
    id?: number
    course_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ProgressCreateOrConnectWithoutUserInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressCreateManyUserInputEnvelope = {
    data: Enumerable<ProgressCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ExamResultCreateWithoutUserInput = {
    score: number
    submitted_at?: Date | string
    exam: ExamCreateNestedOneWithoutResultsInput
  }

  export type ExamResultUncheckedCreateWithoutUserInput = {
    id?: number
    exam_id: number
    score: number
    submitted_at?: Date | string
  }

  export type ExamResultCreateOrConnectWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    create: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput>
  }

  export type ExamResultCreateManyUserInputEnvelope = {
    data: Enumerable<ExamResultCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: Enumerable<EnrollmentScalarWhereInput>
    OR?: Enumerable<EnrollmentScalarWhereInput>
    NOT?: Enumerable<EnrollmentScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    group_id?: IntFilter | number
    learning_path_id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
  }

  export type ProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
  }

  export type ProgressUpdateManyWithWhereWithoutUserInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutProgressInput>
  }

  export type ProgressScalarWhereInput = {
    AND?: Enumerable<ProgressScalarWhereInput>
    OR?: Enumerable<ProgressScalarWhereInput>
    NOT?: Enumerable<ProgressScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    course_id?: IntFilter | number
    percentage?: FloatFilter | number
    started_at?: DateTimeFilter | Date | string
    completed_at?: DateTimeNullableFilter | Date | string | null
  }

  export type ExamResultUpsertWithWhereUniqueWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    update: XOR<ExamResultUpdateWithoutUserInput, ExamResultUncheckedUpdateWithoutUserInput>
    create: XOR<ExamResultCreateWithoutUserInput, ExamResultUncheckedCreateWithoutUserInput>
  }

  export type ExamResultUpdateWithWhereUniqueWithoutUserInput = {
    where: ExamResultWhereUniqueInput
    data: XOR<ExamResultUpdateWithoutUserInput, ExamResultUncheckedUpdateWithoutUserInput>
  }

  export type ExamResultUpdateManyWithWhereWithoutUserInput = {
    where: ExamResultScalarWhereInput
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyWithoutExamResultsInput>
  }

  export type ExamResultScalarWhereInput = {
    AND?: Enumerable<ExamResultScalarWhereInput>
    OR?: Enumerable<ExamResultScalarWhereInput>
    NOT?: Enumerable<ExamResultScalarWhereInput>
    id?: IntFilter | number
    user_id?: IntFilter | number
    exam_id?: IntFilter | number
    score?: FloatFilter | number
    submitted_at?: DateTimeFilter | Date | string
  }

  export type LearningPathCourseCreateWithoutLearning_pathInput = {
    course: CourseCreateNestedOneWithoutPathsInput
  }

  export type LearningPathCourseUncheckedCreateWithoutLearning_pathInput = {
    id?: number
    course_id: number
  }

  export type LearningPathCourseCreateOrConnectWithoutLearning_pathInput = {
    where: LearningPathCourseWhereUniqueInput
    create: XOR<LearningPathCourseCreateWithoutLearning_pathInput, LearningPathCourseUncheckedCreateWithoutLearning_pathInput>
  }

  export type LearningPathCourseCreateManyLearning_pathInputEnvelope = {
    data: Enumerable<LearningPathCourseCreateManyLearning_pathInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutLearning_pathInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    group: GroupCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutLearning_pathInput = {
    id?: number
    user_id: number
    group_id: number
    created_at?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutLearning_pathInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutLearning_pathInput, EnrollmentUncheckedCreateWithoutLearning_pathInput>
  }

  export type EnrollmentCreateManyLearning_pathInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyLearning_pathInput>
    skipDuplicates?: boolean
  }

  export type LearningPathCourseUpsertWithWhereUniqueWithoutLearning_pathInput = {
    where: LearningPathCourseWhereUniqueInput
    update: XOR<LearningPathCourseUpdateWithoutLearning_pathInput, LearningPathCourseUncheckedUpdateWithoutLearning_pathInput>
    create: XOR<LearningPathCourseCreateWithoutLearning_pathInput, LearningPathCourseUncheckedCreateWithoutLearning_pathInput>
  }

  export type LearningPathCourseUpdateWithWhereUniqueWithoutLearning_pathInput = {
    where: LearningPathCourseWhereUniqueInput
    data: XOR<LearningPathCourseUpdateWithoutLearning_pathInput, LearningPathCourseUncheckedUpdateWithoutLearning_pathInput>
  }

  export type LearningPathCourseUpdateManyWithWhereWithoutLearning_pathInput = {
    where: LearningPathCourseScalarWhereInput
    data: XOR<LearningPathCourseUpdateManyMutationInput, LearningPathCourseUncheckedUpdateManyWithoutCoursesInput>
  }

  export type LearningPathCourseScalarWhereInput = {
    AND?: Enumerable<LearningPathCourseScalarWhereInput>
    OR?: Enumerable<LearningPathCourseScalarWhereInput>
    NOT?: Enumerable<LearningPathCourseScalarWhereInput>
    id?: IntFilter | number
    learning_path_id?: IntFilter | number
    course_id?: IntFilter | number
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutLearning_pathInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutLearning_pathInput, EnrollmentUncheckedUpdateWithoutLearning_pathInput>
    create: XOR<EnrollmentCreateWithoutLearning_pathInput, EnrollmentUncheckedCreateWithoutLearning_pathInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutLearning_pathInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutLearning_pathInput, EnrollmentUncheckedUpdateWithoutLearning_pathInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutLearning_pathInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type LearningPathCourseCreateWithoutCourseInput = {
    learning_path: LearningPathCreateNestedOneWithoutCoursesInput
  }

  export type LearningPathCourseUncheckedCreateWithoutCourseInput = {
    id?: number
    learning_path_id: number
  }

  export type LearningPathCourseCreateOrConnectWithoutCourseInput = {
    where: LearningPathCourseWhereUniqueInput
    create: XOR<LearningPathCourseCreateWithoutCourseInput, LearningPathCourseUncheckedCreateWithoutCourseInput>
  }

  export type LearningPathCourseCreateManyCourseInputEnvelope = {
    data: Enumerable<LearningPathCourseCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type ProgressCreateWithoutCourseInput = {
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateWithoutCourseInput = {
    id?: number
    user_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ProgressCreateOrConnectWithoutCourseInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutCourseInput, ProgressUncheckedCreateWithoutCourseInput>
  }

  export type ProgressCreateManyCourseInputEnvelope = {
    data: Enumerable<ProgressCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutCourseInput = {
    title: string
    created_at?: Date | string
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ExamResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    created_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ExamResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCourseInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamCreateManyCourseInputEnvelope = {
    data: Enumerable<ExamCreateManyCourseInput>
    skipDuplicates?: boolean
  }

  export type LearningPathCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: LearningPathCourseWhereUniqueInput
    update: XOR<LearningPathCourseUpdateWithoutCourseInput, LearningPathCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<LearningPathCourseCreateWithoutCourseInput, LearningPathCourseUncheckedCreateWithoutCourseInput>
  }

  export type LearningPathCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: LearningPathCourseWhereUniqueInput
    data: XOR<LearningPathCourseUpdateWithoutCourseInput, LearningPathCourseUncheckedUpdateWithoutCourseInput>
  }

  export type LearningPathCourseUpdateManyWithWhereWithoutCourseInput = {
    where: LearningPathCourseScalarWhereInput
    data: XOR<LearningPathCourseUpdateManyMutationInput, LearningPathCourseUncheckedUpdateManyWithoutPathsInput>
  }

  export type ProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutCourseInput, ProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<ProgressCreateWithoutCourseInput, ProgressUncheckedCreateWithoutCourseInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutCourseInput, ProgressUncheckedUpdateWithoutCourseInput>
  }

  export type ProgressUpdateManyWithWhereWithoutCourseInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutProgressInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
  }

  export type ExamUpdateManyWithWhereWithoutCourseInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutExamsInput>
  }

  export type ExamScalarWhereInput = {
    AND?: Enumerable<ExamScalarWhereInput>
    OR?: Enumerable<ExamScalarWhereInput>
    NOT?: Enumerable<ExamScalarWhereInput>
    id?: IntFilter | number
    course_id?: IntFilter | number
    title?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
  }

  export type LearningPathCreateWithoutCoursesInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathUncheckedCreateWithoutCoursesInput = {
    id?: number
    title: string
    description?: string | null
    created_at?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathCreateOrConnectWithoutCoursesInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutCoursesInput, LearningPathUncheckedCreateWithoutCoursesInput>
  }

  export type CourseCreateWithoutPathsInput = {
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    progress?: ProgressCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPathsInput = {
    id?: number
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPathsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPathsInput, CourseUncheckedCreateWithoutPathsInput>
  }

  export type LearningPathUpsertWithoutCoursesInput = {
    update: XOR<LearningPathUpdateWithoutCoursesInput, LearningPathUncheckedUpdateWithoutCoursesInput>
    create: XOR<LearningPathCreateWithoutCoursesInput, LearningPathUncheckedCreateWithoutCoursesInput>
  }

  export type LearningPathUpdateWithoutCoursesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutLearning_pathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutLearning_pathNestedInput
  }

  export type CourseUpsertWithoutPathsInput = {
    update: XOR<CourseUpdateWithoutPathsInput, CourseUncheckedUpdateWithoutPathsInput>
    create: XOR<CourseCreateWithoutPathsInput, CourseUncheckedCreateWithoutPathsInput>
  }

  export type CourseUpdateWithoutPathsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type EnrollmentCreateWithoutGroupInput = {
    created_at?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    learning_path: LearningPathCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutGroupInput = {
    id?: number
    user_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput>
  }

  export type EnrollmentCreateManyGroupInputEnvelope = {
    data: Enumerable<EnrollmentCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutGroupInput, EnrollmentUncheckedUpdateWithoutGroupInput>
    create: XOR<EnrollmentCreateWithoutGroupInput, EnrollmentUncheckedCreateWithoutGroupInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutGroupInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutGroupInput, EnrollmentUncheckedUpdateWithoutGroupInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutGroupInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    progress?: ProgressCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type GroupCreateWithoutEnrollmentsInput = {
    name: string
    created_at?: Date | string
  }

  export type GroupUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type GroupCreateOrConnectWithoutEnrollmentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
  }

  export type LearningPathCreateWithoutEnrollmentsInput = {
    title: string
    description?: string | null
    created_at?: Date | string
    courses?: LearningPathCourseCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    title: string
    description?: string | null
    created_at?: Date | string
    courses?: LearningPathCourseUncheckedCreateNestedManyWithoutLearning_pathInput
  }

  export type LearningPathCreateOrConnectWithoutEnrollmentsInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutEnrollmentsInput = {
    update: XOR<GroupUpdateWithoutEnrollmentsInput, GroupUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<GroupCreateWithoutEnrollmentsInput, GroupUncheckedCreateWithoutEnrollmentsInput>
  }

  export type GroupUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathUpsertWithoutEnrollmentsInput = {
    update: XOR<LearningPathUpdateWithoutEnrollmentsInput, LearningPathUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<LearningPathCreateWithoutEnrollmentsInput, LearningPathUncheckedCreateWithoutEnrollmentsInput>
  }

  export type LearningPathUpdateWithoutEnrollmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: LearningPathCourseUpdateManyWithoutLearning_pathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: LearningPathCourseUncheckedUpdateManyWithoutLearning_pathNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    examResults?: ExamResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: number
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    examResults?: ExamResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type CourseCreateWithoutProgressInput = {
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseCreateNestedManyWithoutCourseInput
    exams?: ExamCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutProgressInput = {
    id?: number
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseUncheckedCreateNestedManyWithoutCourseInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutProgressInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    examResults?: ExamResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutProgressInput = {
    update: XOR<CourseUpdateWithoutProgressInput, CourseUncheckedUpdateWithoutProgressInput>
    create: XOR<CourseCreateWithoutProgressInput, CourseUncheckedCreateWithoutProgressInput>
  }

  export type CourseUpdateWithoutProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUpdateManyWithoutCourseNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUncheckedUpdateManyWithoutCourseNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutExamsInput = {
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseCreateNestedManyWithoutCourseInput
    progress?: ProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExamsInput = {
    id?: number
    title: string
    description?: string | null
    scorm_path: string
    created_at?: Date | string
    paths?: LearningPathCourseUncheckedCreateNestedManyWithoutCourseInput
    progress?: ProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutExamsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
  }

  export type QuestionCreateWithoutExamInput = {
    text: string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: number
    text: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: Enumerable<QuestionCreateManyExamInput>
    skipDuplicates?: boolean
  }

  export type ExamResultCreateWithoutExamInput = {
    score: number
    submitted_at?: Date | string
    user: UserCreateNestedOneWithoutExamResultsInput
  }

  export type ExamResultUncheckedCreateWithoutExamInput = {
    id?: number
    user_id: number
    score: number
    submitted_at?: Date | string
  }

  export type ExamResultCreateOrConnectWithoutExamInput = {
    where: ExamResultWhereUniqueInput
    create: XOR<ExamResultCreateWithoutExamInput, ExamResultUncheckedCreateWithoutExamInput>
  }

  export type ExamResultCreateManyExamInputEnvelope = {
    data: Enumerable<ExamResultCreateManyExamInput>
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutExamsInput = {
    update: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
  }

  export type CourseUpdateWithoutExamsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUpdateManyWithoutCourseNestedInput
    progress?: ProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scorm_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paths?: LearningPathCourseUncheckedUpdateManyWithoutCourseNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: IntFilter | number
    exam_id?: IntFilter | number
    text?: StringFilter | string
  }

  export type ExamResultUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamResultWhereUniqueInput
    update: XOR<ExamResultUpdateWithoutExamInput, ExamResultUncheckedUpdateWithoutExamInput>
    create: XOR<ExamResultCreateWithoutExamInput, ExamResultUncheckedCreateWithoutExamInput>
  }

  export type ExamResultUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamResultWhereUniqueInput
    data: XOR<ExamResultUpdateWithoutExamInput, ExamResultUncheckedUpdateWithoutExamInput>
  }

  export type ExamResultUpdateManyWithWhereWithoutExamInput = {
    where: ExamResultScalarWhereInput
    data: XOR<ExamResultUpdateManyMutationInput, ExamResultUncheckedUpdateManyWithoutResultsInput>
  }

  export type ExamCreateWithoutQuestionsInput = {
    title: string
    created_at?: Date | string
    course: CourseCreateNestedOneWithoutExamsInput
    results?: ExamResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: number
    course_id: number
    title: string
    created_at?: Date | string
    results?: ExamResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    text: string
    is_correct?: boolean
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    text: string
    is_correct?: boolean
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: Enumerable<AnswerCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutExamsNestedInput
    results?: ExamResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ExamResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutAnswersInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: Enumerable<AnswerScalarWhereInput>
    OR?: Enumerable<AnswerScalarWhereInput>
    NOT?: Enumerable<AnswerScalarWhereInput>
    id?: IntFilter | number
    question_id?: IntFilter | number
    text?: StringFilter | string
    is_correct?: BoolFilter | boolean
  }

  export type QuestionCreateWithoutAnswersInput = {
    text: string
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    exam_id: number
    text: string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    text?: StringFieldUpdateOperationsInput | string
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutExamResultsInput = {
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: ProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamResultsInput = {
    id?: number
    name: string
    email: string
    password: string
    registration: string
    created_at?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
  }

  export type ExamCreateWithoutResultsInput = {
    title: string
    created_at?: Date | string
    course: CourseCreateNestedOneWithoutExamsInput
    questions?: QuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutResultsInput = {
    id?: number
    course_id: number
    title: string
    created_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutResultsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
  }

  export type UserUpsertWithoutExamResultsInput = {
    update: XOR<UserUpdateWithoutExamResultsInput, UserUncheckedUpdateWithoutExamResultsInput>
    create: XOR<UserCreateWithoutExamResultsInput, UserUncheckedCreateWithoutExamResultsInput>
  }

  export type UserUpdateWithoutExamResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: ProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExamUpsertWithoutResultsInput = {
    update: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
  }

  export type ExamUpdateWithoutResultsInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutExamsNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type EnrollmentCreateManyUserInput = {
    id?: number
    group_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type ProgressCreateManyUserInput = {
    id?: number
    course_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ExamResultCreateManyUserInput = {
    id?: number
    exam_id: number
    score: number
    submitted_at?: Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
    learning_path?: LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateWithoutUserInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgressUncheckedUpdateManyWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamResultUpdateWithoutUserInput = {
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ExamResultUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultUncheckedUpdateManyWithoutExamResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    exam_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCourseCreateManyLearning_pathInput = {
    id?: number
    course_id: number
  }

  export type EnrollmentCreateManyLearning_pathInput = {
    id?: number
    user_id: number
    group_id: number
    created_at?: Date | string
  }

  export type LearningPathCourseUpdateWithoutLearning_pathInput = {
    course?: CourseUpdateOneRequiredWithoutPathsNestedInput
  }

  export type LearningPathCourseUncheckedUpdateWithoutLearning_pathInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type LearningPathCourseUncheckedUpdateManyWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUpdateWithoutLearning_pathInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    group?: GroupUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutLearning_pathInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPathCourseCreateManyCourseInput = {
    id?: number
    learning_path_id: number
  }

  export type ProgressCreateManyCourseInput = {
    id?: number
    user_id: number
    percentage?: number
    started_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ExamCreateManyCourseInput = {
    id?: number
    title: string
    created_at?: Date | string
  }

  export type LearningPathCourseUpdateWithoutCourseInput = {
    learning_path?: LearningPathUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type LearningPathCourseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
  }

  export type LearningPathCourseUncheckedUpdateManyWithoutPathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProgressUpdateWithoutCourseInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExamUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ExamResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ExamResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutExamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyGroupInput = {
    id?: number
    user_id: number
    learning_path_id: number
    created_at?: Date | string
  }

  export type EnrollmentUpdateWithoutGroupInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    learning_path?: LearningPathUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    learning_path_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyExamInput = {
    id?: number
    text: string
  }

  export type ExamResultCreateManyExamInput = {
    id?: number
    user_id: number
    score: number
    submitted_at?: Date | string
  }

  export type QuestionUpdateWithoutExamInput = {
    text?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExamResultUpdateWithoutExamInput = {
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExamResultsNestedInput
  }

  export type ExamResultUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamResultUncheckedUpdateManyWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    text: string
    is_correct?: boolean
  }

  export type AnswerUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnswerUncheckedUpdateManyWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
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