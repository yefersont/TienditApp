
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Sucursal
 * 
 */
export type Sucursal = $Result.DefaultSelection<Prisma.$SucursalPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model MovimientoInventario
 * 
 */
export type MovimientoInventario = $Result.DefaultSelection<Prisma.$MovimientoInventarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoMovimiento: {
    ENTRADA: 'ENTRADA',
    SALIDA: 'SALIDA',
    AJUSTE: 'AJUSTE'
  };

  export type TipoMovimiento = (typeof TipoMovimiento)[keyof typeof TipoMovimiento]

}

export type TipoMovimiento = $Enums.TipoMovimiento

export const TipoMovimiento: typeof $Enums.TipoMovimiento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */

  constructor(optionsArg?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

  /**
* `prisma.rol`: Exposes CRUD operations for the **Rol** model.
* Example usage:
* ```ts
* // Fetch zero or more Rols
* const rols = await prisma.rol.findMany()
* ```
*/
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sucursal`: Exposes CRUD operations for the **Sucursal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sucursals
    * const sucursals = await prisma.sucursal.findMany()
    * ```
    */
  get sucursal(): Prisma.SucursalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoInventario`: Exposes CRUD operations for the **MovimientoInventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoInventarios
    * const movimientoInventarios = await prisma.movimientoInventario.findMany()
    * ```
    */
  get movimientoInventario(): Prisma.MovimientoInventarioDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
    ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    | { [P in keyof O as P extends K ? P : never]-?: O[P] } & O
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
    Rol: 'Rol',
    Usuario: 'Usuario',
    Sucursal: 'Sucursal',
    Categoria: 'Categoria',
    Producto: 'Producto',
    Inventario: 'Inventario',
    MovimientoInventario: 'MovimientoInventario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rol" | "usuario" | "sucursal" | "categoria" | "producto" | "inventario" | "movimientoInventario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Sucursal: {
        payload: Prisma.$SucursalPayload<ExtArgs>
        fields: Prisma.SucursalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SucursalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SucursalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findFirst: {
            args: Prisma.SucursalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SucursalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          findMany: {
            args: Prisma.SucursalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>[]
          }
          create: {
            args: Prisma.SucursalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          createMany: {
            args: Prisma.SucursalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SucursalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>[]
          }
          delete: {
            args: Prisma.SucursalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          update: {
            args: Prisma.SucursalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          deleteMany: {
            args: Prisma.SucursalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SucursalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SucursalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>[]
          }
          upsert: {
            args: Prisma.SucursalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SucursalPayload>
          }
          aggregate: {
            args: Prisma.SucursalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSucursal>
          }
          groupBy: {
            args: Prisma.SucursalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SucursalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SucursalCountArgs<ExtArgs>
            result: $Utils.Optional<SucursalCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      MovimientoInventario: {
        payload: Prisma.$MovimientoInventarioPayload<ExtArgs>
        fields: Prisma.MovimientoInventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findFirst: {
            args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findMany: {
            args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          create: {
            args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          createMany: {
            args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          delete: {
            args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          update: {
            args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          upsert: {
            args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          aggregate: {
            args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoInventario>
          }
          groupBy: {
            args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoInventarioCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    rol?: RolOmit
    usuario?: UsuarioOmit
    sucursal?: SucursalOmit
    categoria?: CategoriaOmit
    producto?: ProductoOmit
    inventario?: InventarioOmit
    movimientoInventario?: MovimientoInventarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    movimientosInventario: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientosInventario?: boolean | UsuarioCountOutputTypeCountMovimientosInventarioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMovimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
  }


  /**
   * Count Type SucursalCountOutputType
   */

  export type SucursalCountOutputType = {
    inventarios: number
    movimientosInventario: number
  }

  export type SucursalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventarios?: boolean | SucursalCountOutputTypeCountInventariosArgs
    movimientosInventario?: boolean | SucursalCountOutputTypeCountMovimientosInventarioArgs
  }

  // Custom InputTypes
  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SucursalCountOutputType
     */
    select?: SucursalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeCountInventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
  }

  /**
   * SucursalCountOutputType without action
   */
  export type SucursalCountOutputTypeCountMovimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    inventarios: number
    movimientosInventario: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventarios?: boolean | ProductoCountOutputTypeCountInventariosArgs
    movimientosInventario?: boolean | ProductoCountOutputTypeCountMovimientosInventarioArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountInventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountMovimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
    [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateRol[P]>
    : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: string
    nombre: string
    createdAt: Date
    updatedAt: Date
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], RolGroupByOutputType[P]>
        : GetScalarType<T[P], RolGroupByOutputType[P]>
      }
    >
  >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "createdAt" | "updatedAt", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], RolCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: RolGroupByArgs['orderBy'] }
      : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Rol model
     */
    readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'String'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly createdAt: FieldRef<"Rol", 'DateTime'>
    readonly updatedAt: FieldRef<"Rol", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    activo: boolean | null
    rolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password: string | null
    activo: boolean | null
    rolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    activo: number
    rolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    activo?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    activo?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    activo?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateUsuario[P]>
    : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password: string
    activo: boolean
    rolId: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
      }
    >
  >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    activo?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    movimientosInventario?: boolean | Usuario$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    activo?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    activo?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    activo?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "activo" | "rolId" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    movimientosInventario?: boolean | Usuario$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      movimientosInventario: Prisma.$MovimientoInventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password: string
      activo: boolean
      rolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: UsuarioGroupByArgs['orderBy'] }
      : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Usuario model
     */
    readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movimientosInventario<T extends Usuario$movimientosInventarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$movimientosInventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly rolId: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.movimientosInventario
   */
  export type Usuario$movimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    cursor?: MovimientoInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Sucursal
   */

  export type AggregateSucursal = {
    _count: SucursalCountAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  export type SucursalMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SucursalMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SucursalCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    telefono: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SucursalMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SucursalMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SucursalCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SucursalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursal to aggregate.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sucursals
    **/
    _count?: true | SucursalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SucursalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SucursalMaxAggregateInputType
  }

  export type GetSucursalAggregateType<T extends SucursalAggregateArgs> = {
    [P in keyof T & keyof AggregateSucursal]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateSucursal[P]>
    : GetScalarType<T[P], AggregateSucursal[P]>
  }




  export type SucursalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SucursalWhereInput
    orderBy?: SucursalOrderByWithAggregationInput | SucursalOrderByWithAggregationInput[]
    by: SucursalScalarFieldEnum[] | SucursalScalarFieldEnum
    having?: SucursalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SucursalCountAggregateInputType | true
    _min?: SucursalMinAggregateInputType
    _max?: SucursalMaxAggregateInputType
  }

  export type SucursalGroupByOutputType = {
    id: string
    nombre: string
    direccion: string | null
    telefono: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: SucursalCountAggregateOutputType | null
    _min: SucursalMinAggregateOutputType | null
    _max: SucursalMaxAggregateOutputType | null
  }

  type GetSucursalGroupByPayload<T extends SucursalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SucursalGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof SucursalGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], SucursalGroupByOutputType[P]>
        : GetScalarType<T[P], SucursalGroupByOutputType[P]>
      }
    >
  >


  export type SucursalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventarios?: boolean | Sucursal$inventariosArgs<ExtArgs>
    movimientosInventario?: boolean | Sucursal$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sucursal"]>

  export type SucursalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sucursal"]>

  export type SucursalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sucursal"]>

  export type SucursalSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SucursalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "telefono" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["sucursal"]>
  export type SucursalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventarios?: boolean | Sucursal$inventariosArgs<ExtArgs>
    movimientosInventario?: boolean | Sucursal$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | SucursalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SucursalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SucursalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SucursalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sucursal"
    objects: {
      inventarios: Prisma.$InventarioPayload<ExtArgs>[]
      movimientosInventario: Prisma.$MovimientoInventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      direccion: string | null
      telefono: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sucursal"]>
    composites: {}
  }

  type SucursalGetPayload<S extends boolean | null | undefined | SucursalDefaultArgs> = $Result.GetResult<Prisma.$SucursalPayload, S>

  type SucursalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SucursalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SucursalCountAggregateInputType | true
    }

  export interface SucursalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sucursal'], meta: { name: 'Sucursal' } }
    /**
     * Find zero or one Sucursal that matches the filter.
     * @param {SucursalFindUniqueArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SucursalFindUniqueArgs>(args: SelectSubset<T, SucursalFindUniqueArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sucursal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SucursalFindUniqueOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SucursalFindUniqueOrThrowArgs>(args: SelectSubset<T, SucursalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SucursalFindFirstArgs>(args?: SelectSubset<T, SucursalFindFirstArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sucursal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindFirstOrThrowArgs} args - Arguments to find a Sucursal
     * @example
     * // Get one Sucursal
     * const sucursal = await prisma.sucursal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SucursalFindFirstOrThrowArgs>(args?: SelectSubset<T, SucursalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sucursals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sucursals
     * const sucursals = await prisma.sucursal.findMany()
     * 
     * // Get first 10 Sucursals
     * const sucursals = await prisma.sucursal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SucursalFindManyArgs>(args?: SelectSubset<T, SucursalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sucursal.
     * @param {SucursalCreateArgs} args - Arguments to create a Sucursal.
     * @example
     * // Create one Sucursal
     * const Sucursal = await prisma.sucursal.create({
     *   data: {
     *     // ... data to create a Sucursal
     *   }
     * })
     * 
     */
    create<T extends SucursalCreateArgs>(args: SelectSubset<T, SucursalCreateArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sucursals.
     * @param {SucursalCreateManyArgs} args - Arguments to create many Sucursals.
     * @example
     * // Create many Sucursals
     * const sucursal = await prisma.sucursal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SucursalCreateManyArgs>(args?: SelectSubset<T, SucursalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sucursals and returns the data saved in the database.
     * @param {SucursalCreateManyAndReturnArgs} args - Arguments to create many Sucursals.
     * @example
     * // Create many Sucursals
     * const sucursal = await prisma.sucursal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sucursals and only return the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SucursalCreateManyAndReturnArgs>(args?: SelectSubset<T, SucursalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sucursal.
     * @param {SucursalDeleteArgs} args - Arguments to delete one Sucursal.
     * @example
     * // Delete one Sucursal
     * const Sucursal = await prisma.sucursal.delete({
     *   where: {
     *     // ... filter to delete one Sucursal
     *   }
     * })
     * 
     */
    delete<T extends SucursalDeleteArgs>(args: SelectSubset<T, SucursalDeleteArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sucursal.
     * @param {SucursalUpdateArgs} args - Arguments to update one Sucursal.
     * @example
     * // Update one Sucursal
     * const sucursal = await prisma.sucursal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SucursalUpdateArgs>(args: SelectSubset<T, SucursalUpdateArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sucursals.
     * @param {SucursalDeleteManyArgs} args - Arguments to filter Sucursals to delete.
     * @example
     * // Delete a few Sucursals
     * const { count } = await prisma.sucursal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SucursalDeleteManyArgs>(args?: SelectSubset<T, SucursalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sucursals
     * const sucursal = await prisma.sucursal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SucursalUpdateManyArgs>(args: SelectSubset<T, SucursalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sucursals and returns the data updated in the database.
     * @param {SucursalUpdateManyAndReturnArgs} args - Arguments to update many Sucursals.
     * @example
     * // Update many Sucursals
     * const sucursal = await prisma.sucursal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sucursals and only return the `id`
     * const sucursalWithIdOnly = await prisma.sucursal.updateManyAndReturn({
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
    updateManyAndReturn<T extends SucursalUpdateManyAndReturnArgs>(args: SelectSubset<T, SucursalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sucursal.
     * @param {SucursalUpsertArgs} args - Arguments to update or create a Sucursal.
     * @example
     * // Update or create a Sucursal
     * const sucursal = await prisma.sucursal.upsert({
     *   create: {
     *     // ... data to create a Sucursal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sucursal we want to update
     *   }
     * })
     */
    upsert<T extends SucursalUpsertArgs>(args: SelectSubset<T, SucursalUpsertArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sucursals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalCountArgs} args - Arguments to filter Sucursals to count.
     * @example
     * // Count the number of Sucursals
     * const count = await prisma.sucursal.count({
     *   where: {
     *     // ... the filter for the Sucursals we want to count
     *   }
     * })
    **/
    count<T extends SucursalCountArgs>(
      args?: Subset<T, SucursalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], SucursalCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SucursalAggregateArgs>(args: Subset<T, SucursalAggregateArgs>): Prisma.PrismaPromise<GetSucursalAggregateType<T>>

    /**
     * Group by Sucursal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SucursalGroupByArgs} args - Group by arguments.
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
      T extends SucursalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: SucursalGroupByArgs['orderBy'] }
      : { orderBy?: SucursalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SucursalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSucursalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Sucursal model
     */
    readonly fields: SucursalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sucursal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SucursalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventarios<T extends Sucursal$inventariosArgs<ExtArgs> = {}>(args?: Subset<T, Sucursal$inventariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientosInventario<T extends Sucursal$movimientosInventarioArgs<ExtArgs> = {}>(args?: Subset<T, Sucursal$movimientosInventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sucursal model
   */
  interface SucursalFieldRefs {
    readonly id: FieldRef<"Sucursal", 'String'>
    readonly nombre: FieldRef<"Sucursal", 'String'>
    readonly direccion: FieldRef<"Sucursal", 'String'>
    readonly telefono: FieldRef<"Sucursal", 'String'>
    readonly activo: FieldRef<"Sucursal", 'Boolean'>
    readonly createdAt: FieldRef<"Sucursal", 'DateTime'>
    readonly updatedAt: FieldRef<"Sucursal", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Sucursal findUnique
   */
  export type SucursalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal findUniqueOrThrow
   */
  export type SucursalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal findFirst
   */
  export type SucursalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal findFirstOrThrow
   */
  export type SucursalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursal to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal findMany
   */
  export type SucursalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter, which Sucursals to fetch.
     */
    where?: SucursalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sucursals to fetch.
     */
    orderBy?: SucursalOrderByWithRelationInput | SucursalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sucursals.
     */
    cursor?: SucursalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sucursals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sucursals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sucursals.
     */
    distinct?: SucursalScalarFieldEnum | SucursalScalarFieldEnum[]
  }

  /**
   * Sucursal create
   */
  export type SucursalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to create a Sucursal.
     */
    data: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
  }

  /**
   * Sucursal createMany
   */
  export type SucursalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sucursals.
     */
    data: SucursalCreateManyInput | SucursalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sucursal createManyAndReturn
   */
  export type SucursalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * The data used to create many Sucursals.
     */
    data: SucursalCreateManyInput | SucursalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sucursal update
   */
  export type SucursalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The data needed to update a Sucursal.
     */
    data: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
    /**
     * Choose, which Sucursal to update.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal updateMany
   */
  export type SucursalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sucursals.
     */
    data: XOR<SucursalUpdateManyMutationInput, SucursalUncheckedUpdateManyInput>
    /**
     * Filter which Sucursals to update
     */
    where?: SucursalWhereInput
    /**
     * Limit how many Sucursals to update.
     */
    limit?: number
  }

  /**
   * Sucursal updateManyAndReturn
   */
  export type SucursalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * The data used to update Sucursals.
     */
    data: XOR<SucursalUpdateManyMutationInput, SucursalUncheckedUpdateManyInput>
    /**
     * Filter which Sucursals to update
     */
    where?: SucursalWhereInput
    /**
     * Limit how many Sucursals to update.
     */
    limit?: number
  }

  /**
   * Sucursal upsert
   */
  export type SucursalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * The filter to search for the Sucursal to update in case it exists.
     */
    where: SucursalWhereUniqueInput
    /**
     * In case the Sucursal found by the `where` argument doesn't exist, create a new Sucursal with this data.
     */
    create: XOR<SucursalCreateInput, SucursalUncheckedCreateInput>
    /**
     * In case the Sucursal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SucursalUpdateInput, SucursalUncheckedUpdateInput>
  }

  /**
   * Sucursal delete
   */
  export type SucursalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
    /**
     * Filter which Sucursal to delete.
     */
    where: SucursalWhereUniqueInput
  }

  /**
   * Sucursal deleteMany
   */
  export type SucursalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sucursals to delete
     */
    where?: SucursalWhereInput
    /**
     * Limit how many Sucursals to delete.
     */
    limit?: number
  }

  /**
   * Sucursal.inventarios
   */
  export type Sucursal$inventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    cursor?: InventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Sucursal.movimientosInventario
   */
  export type Sucursal$movimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    cursor?: MovimientoInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * Sucursal without action
   */
  export type SucursalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sucursal
     */
    select?: SucursalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sucursal
     */
    omit?: SucursalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SucursalInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateCategoria[P]>
    : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
      }
    >
  >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: CategoriaGroupByArgs['orderBy'] }
      : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Categoria model
     */
    readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
    readonly activo: FieldRef<"Categoria", 'Boolean'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    precioCompra: Decimal | null
    precioVenta: Decimal | null
    stockMinimo: number | null
  }

  export type ProductoSumAggregateOutputType = {
    precioCompra: Decimal | null
    precioVenta: Decimal | null
    stockMinimo: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: string | null
    categoriaId: string | null
    nombre: string | null
    descripcion: string | null
    codigoBarras: string | null
    precioCompra: Decimal | null
    precioVenta: Decimal | null
    stockMinimo: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: string | null
    categoriaId: string | null
    nombre: string | null
    descripcion: string | null
    codigoBarras: string | null
    precioCompra: Decimal | null
    precioVenta: Decimal | null
    stockMinimo: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    categoriaId: number
    nombre: number
    descripcion: number
    codigoBarras: number
    precioCompra: number
    precioVenta: number
    stockMinimo: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    precioCompra?: true
    precioVenta?: true
    stockMinimo?: true
  }

  export type ProductoSumAggregateInputType = {
    precioCompra?: true
    precioVenta?: true
    stockMinimo?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    precioCompra?: true
    precioVenta?: true
    stockMinimo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    precioCompra?: true
    precioVenta?: true
    stockMinimo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    codigoBarras?: true
    precioCompra?: true
    precioVenta?: true
    stockMinimo?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateProducto[P]>
    : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: string
    categoriaId: string
    nombre: string
    descripcion: string | null
    codigoBarras: string | null
    precioCompra: Decimal
    precioVenta: Decimal
    stockMinimo: number
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        : GetScalarType<T[P], ProductoGroupByOutputType[P]>
      }
    >
  >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    stockMinimo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    inventarios?: boolean | Producto$inventariosArgs<ExtArgs>
    movimientosInventario?: boolean | Producto$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    stockMinimo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    stockMinimo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>

  export type ProductoSelectScalar = {
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    codigoBarras?: boolean
    precioCompra?: boolean
    precioVenta?: boolean
    stockMinimo?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoriaId" | "nombre" | "descripcion" | "codigoBarras" | "precioCompra" | "precioVenta" | "stockMinimo" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    inventarios?: boolean | Producto$inventariosArgs<ExtArgs>
    movimientosInventario?: boolean | Producto$movimientosInventarioArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ProductoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      inventarios: Prisma.$InventarioPayload<ExtArgs>[]
      movimientosInventario: Prisma.$MovimientoInventarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoriaId: string
      nombre: string
      descripcion: string | null
      codigoBarras: string | null
      precioCompra: Prisma.Decimal
      precioVenta: Prisma.Decimal
      stockMinimo: number
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductoCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductoUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productoWithIdOnly = await prisma.producto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], ProductoCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: ProductoGroupByArgs['orderBy'] }
      : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Producto model
     */
    readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventarios<T extends Producto$inventariosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$inventariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientosInventario<T extends Producto$movimientosInventarioArgs<ExtArgs> = {}>(args?: Subset<T, Producto$movimientosInventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'String'>
    readonly categoriaId: FieldRef<"Producto", 'String'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly codigoBarras: FieldRef<"Producto", 'String'>
    readonly precioCompra: FieldRef<"Producto", 'Decimal'>
    readonly precioVenta: FieldRef<"Producto", 'Decimal'>
    readonly stockMinimo: FieldRef<"Producto", 'Int'>
    readonly activo: FieldRef<"Producto", 'Boolean'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto createManyAndReturn
   */
  export type ProductoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto updateManyAndReturn
   */
  export type ProductoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.inventarios
   */
  export type Producto$inventariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    cursor?: InventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Producto.movimientosInventario
   */
  export type Producto$movimientosInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    cursor?: MovimientoInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type InventarioSumAggregateOutputType = {
    cantidad: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id: string | null
    sucursalId: string | null
    productoId: string | null
    cantidad: number | null
    updatedAt: Date | null
  }

  export type InventarioMaxAggregateOutputType = {
    id: string | null
    sucursalId: string | null
    productoId: string | null
    cantidad: number | null
    updatedAt: Date | null
  }

  export type InventarioCountAggregateOutputType = {
    id: number
    sucursalId: number
    productoId: number
    cantidad: number
    updatedAt: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    cantidad?: true
  }

  export type InventarioSumAggregateInputType = {
    cantidad?: true
  }

  export type InventarioMinAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    cantidad?: true
    updatedAt?: true
  }

  export type InventarioMaxAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    cantidad?: true
    updatedAt?: true
  }

  export type InventarioCountAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    cantidad?: true
    updatedAt?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateInventario[P]>
    : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id: string
    sucursalId: string
    productoId: string
    cantidad: number
    updatedAt: Date
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        : GetScalarType<T[P], InventarioGroupByOutputType[P]>
      }
    >
  >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type InventarioSelectScalar = {
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    cantidad?: boolean
    updatedAt?: boolean
  }

  export type InventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sucursalId" | "productoId" | "cantidad" | "updatedAt", ExtArgs["result"]["inventario"]>
  export type InventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type InventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }
  export type InventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {
      sucursal: Prisma.$SucursalPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sucursalId: string
      productoId: string
      cantidad: number
      updatedAt: Date
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarioWithIdOnly = await prisma.inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventarios and returns the data saved in the database.
     * @param {InventarioCreateManyAndReturnArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, InventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios and returns the data updated in the database.
     * @param {InventarioUpdateManyAndReturnArgs} args - Arguments to update many Inventarios.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, InventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], InventarioCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
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
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: InventarioGroupByArgs['orderBy'] }
      : { orderBy?: InventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Inventario model
     */
    readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sucursal<T extends SucursalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SucursalDefaultArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inventario model
   */
  interface InventarioFieldRefs {
    readonly id: FieldRef<"Inventario", 'String'>
    readonly sucursalId: FieldRef<"Inventario", 'String'>
    readonly productoId: FieldRef<"Inventario", 'String'>
    readonly cantidad: FieldRef<"Inventario", 'Int'>
    readonly updatedAt: FieldRef<"Inventario", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario createManyAndReturn
   */
  export type InventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario updateManyAndReturn
   */
  export type InventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to delete.
     */
    limit?: number
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoInventario
   */

  export type AggregateMovimientoInventario = {
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  export type MovimientoInventarioAvgAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    costoUnitario: Decimal | null
    totalVenta: Decimal | null
    utilidad: Decimal | null
  }

  export type MovimientoInventarioSumAggregateOutputType = {
    cantidad: number | null
    precioUnitario: Decimal | null
    costoUnitario: Decimal | null
    totalVenta: Decimal | null
    utilidad: Decimal | null
  }

  export type MovimientoInventarioMinAggregateOutputType = {
    id: string | null
    sucursalId: string | null
    productoId: string | null
    usuarioId: string | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    precioUnitario: Decimal | null
    costoUnitario: Decimal | null
    totalVenta: Decimal | null
    utilidad: Decimal | null
    observacion: string | null
    createdAt: Date | null
  }

  export type MovimientoInventarioMaxAggregateOutputType = {
    id: string | null
    sucursalId: string | null
    productoId: string | null
    usuarioId: string | null
    tipo: $Enums.TipoMovimiento | null
    cantidad: number | null
    precioUnitario: Decimal | null
    costoUnitario: Decimal | null
    totalVenta: Decimal | null
    utilidad: Decimal | null
    observacion: string | null
    createdAt: Date | null
  }

  export type MovimientoInventarioCountAggregateOutputType = {
    id: number
    sucursalId: number
    productoId: number
    usuarioId: number
    tipo: number
    cantidad: number
    precioUnitario: number
    costoUnitario: number
    totalVenta: number
    utilidad: number
    observacion: number
    createdAt: number
    _all: number
  }


  export type MovimientoInventarioAvgAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    costoUnitario?: true
    totalVenta?: true
    utilidad?: true
  }

  export type MovimientoInventarioSumAggregateInputType = {
    cantidad?: true
    precioUnitario?: true
    costoUnitario?: true
    totalVenta?: true
    utilidad?: true
  }

  export type MovimientoInventarioMinAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    usuarioId?: true
    tipo?: true
    cantidad?: true
    precioUnitario?: true
    costoUnitario?: true
    totalVenta?: true
    utilidad?: true
    observacion?: true
    createdAt?: true
  }

  export type MovimientoInventarioMaxAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    usuarioId?: true
    tipo?: true
    cantidad?: true
    precioUnitario?: true
    costoUnitario?: true
    totalVenta?: true
    utilidad?: true
    observacion?: true
    createdAt?: true
  }

  export type MovimientoInventarioCountAggregateInputType = {
    id?: true
    sucursalId?: true
    productoId?: true
    usuarioId?: true
    tipo?: true
    cantidad?: true
    precioUnitario?: true
    costoUnitario?: true
    totalVenta?: true
    utilidad?: true
    observacion?: true
    createdAt?: true
    _all?: true
  }

  export type MovimientoInventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventario to aggregate.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoInventarios
    **/
    _count?: true | MovimientoInventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoInventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoInventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoInventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type GetMovimientoInventarioAggregateType<T extends MovimientoInventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateMovimientoInventario]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateMovimientoInventario[P]>
    : GetScalarType<T[P], AggregateMovimientoInventario[P]>
  }




  export type MovimientoInventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithAggregationInput | MovimientoInventarioOrderByWithAggregationInput[]
    by: MovimientoInventarioScalarFieldEnum[] | MovimientoInventarioScalarFieldEnum
    having?: MovimientoInventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoInventarioCountAggregateInputType | true
    _avg?: MovimientoInventarioAvgAggregateInputType
    _sum?: MovimientoInventarioSumAggregateInputType
    _min?: MovimientoInventarioMinAggregateInputType
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type MovimientoInventarioGroupByOutputType = {
    id: string
    sucursalId: string
    productoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario: Decimal | null
    costoUnitario: Decimal | null
    totalVenta: Decimal | null
    utilidad: Decimal | null
    observacion: string | null
    createdAt: Date
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  type GetMovimientoInventarioGroupByPayload<T extends MovimientoInventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoInventarioGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof MovimientoInventarioGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
        : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
      }
    >
  >


  export type MovimientoInventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    costoUnitario?: boolean
    totalVenta?: boolean
    utilidad?: boolean
    observacion?: boolean
    createdAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    costoUnitario?: boolean
    totalVenta?: boolean
    utilidad?: boolean
    observacion?: boolean
    createdAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    costoUnitario?: boolean
    totalVenta?: boolean
    utilidad?: boolean
    observacion?: boolean
    createdAt?: boolean
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectScalar = {
    id?: boolean
    sucursalId?: boolean
    productoId?: boolean
    usuarioId?: boolean
    tipo?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    costoUnitario?: boolean
    totalVenta?: boolean
    utilidad?: boolean
    observacion?: boolean
    createdAt?: boolean
  }

  export type MovimientoInventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sucursalId" | "productoId" | "usuarioId" | "tipo" | "cantidad" | "precioUnitario" | "costoUnitario" | "totalVenta" | "utilidad" | "observacion" | "createdAt", ExtArgs["result"]["movimientoInventario"]>
  export type MovimientoInventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sucursal?: boolean | SucursalDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MovimientoInventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoInventario"
    objects: {
      sucursal: Prisma.$SucursalPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sucursalId: string
      productoId: string
      usuarioId: string
      tipo: $Enums.TipoMovimiento
      cantidad: number
      precioUnitario: Prisma.Decimal | null
      costoUnitario: Prisma.Decimal | null
      totalVenta: Prisma.Decimal | null
      utilidad: Prisma.Decimal | null
      observacion: string | null
      createdAt: Date
    }, ExtArgs["result"]["movimientoInventario"]>
    composites: {}
  }

  type MovimientoInventarioGetPayload<S extends boolean | null | undefined | MovimientoInventarioDefaultArgs> = $Result.GetResult<Prisma.$MovimientoInventarioPayload, S>

  type MovimientoInventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoInventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoInventarioCountAggregateInputType | true
    }

  export interface MovimientoInventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoInventario'], meta: { name: 'MovimientoInventario' } }
    /**
     * Find zero or one MovimientoInventario that matches the filter.
     * @param {MovimientoInventarioFindUniqueArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoInventarioFindUniqueArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoInventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoInventarioFindUniqueOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoInventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoInventarioFindFirstArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoInventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoInventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany()
     * 
     * // Get first 10 MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoInventarioFindManyArgs>(args?: SelectSubset<T, MovimientoInventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoInventario.
     * @param {MovimientoInventarioCreateArgs} args - Arguments to create a MovimientoInventario.
     * @example
     * // Create one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.create({
     *   data: {
     *     // ... data to create a MovimientoInventario
     *   }
     * })
     * 
     */
    create<T extends MovimientoInventarioCreateArgs>(args: SelectSubset<T, MovimientoInventarioCreateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoInventarios.
     * @param {MovimientoInventarioCreateManyArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoInventarioCreateManyArgs>(args?: SelectSubset<T, MovimientoInventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimientoInventarios and returns the data saved in the database.
     * @param {MovimientoInventarioCreateManyAndReturnArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimientoInventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimientoInventario.
     * @param {MovimientoInventarioDeleteArgs} args - Arguments to delete one MovimientoInventario.
     * @example
     * // Delete one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.delete({
     *   where: {
     *     // ... filter to delete one MovimientoInventario
     *   }
     * })
     * 
     */
    delete<T extends MovimientoInventarioDeleteArgs>(args: SelectSubset<T, MovimientoInventarioDeleteArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoInventario.
     * @param {MovimientoInventarioUpdateArgs} args - Arguments to update one MovimientoInventario.
     * @example
     * // Update one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoInventarioUpdateArgs>(args: SelectSubset<T, MovimientoInventarioUpdateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoInventarios.
     * @param {MovimientoInventarioDeleteManyArgs} args - Arguments to filter MovimientoInventarios to delete.
     * @example
     * // Delete a few MovimientoInventarios
     * const { count } = await prisma.movimientoInventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoInventarioDeleteManyArgs>(args?: SelectSubset<T, MovimientoInventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoInventarioUpdateManyArgs>(args: SelectSubset<T, MovimientoInventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoInventarios and returns the data updated in the database.
     * @param {MovimientoInventarioUpdateManyAndReturnArgs} args - Arguments to update many MovimientoInventarios.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimientoInventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimientoInventario.
     * @param {MovimientoInventarioUpsertArgs} args - Arguments to update or create a MovimientoInventario.
     * @example
     * // Update or create a MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.upsert({
     *   create: {
     *     // ... data to create a MovimientoInventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoInventario we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoInventarioUpsertArgs>(args: SelectSubset<T, MovimientoInventarioUpsertArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioCountArgs} args - Arguments to filter MovimientoInventarios to count.
     * @example
     * // Count the number of MovimientoInventarios
     * const count = await prisma.movimientoInventario.count({
     *   where: {
     *     // ... the filter for the MovimientoInventarios we want to count
     *   }
     * })
    **/
    count<T extends MovimientoInventarioCountArgs>(
      args?: Subset<T, MovimientoInventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], MovimientoInventarioCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientoInventarioAggregateArgs>(args: Subset<T, MovimientoInventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientoInventarioAggregateType<T>>

    /**
     * Group by MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioGroupByArgs} args - Group by arguments.
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
      T extends MovimientoInventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: MovimientoInventarioGroupByArgs['orderBy'] }
      : { orderBy?: MovimientoInventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimientoInventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the MovimientoInventario model
     */
    readonly fields: MovimientoInventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoInventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoInventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sucursal<T extends SucursalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SucursalDefaultArgs<ExtArgs>>): Prisma__SucursalClient<$Result.GetResult<Prisma.$SucursalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimientoInventario model
   */
  interface MovimientoInventarioFieldRefs {
    readonly id: FieldRef<"MovimientoInventario", 'String'>
    readonly sucursalId: FieldRef<"MovimientoInventario", 'String'>
    readonly productoId: FieldRef<"MovimientoInventario", 'String'>
    readonly usuarioId: FieldRef<"MovimientoInventario", 'String'>
    readonly tipo: FieldRef<"MovimientoInventario", 'TipoMovimiento'>
    readonly cantidad: FieldRef<"MovimientoInventario", 'Int'>
    readonly precioUnitario: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly costoUnitario: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly totalVenta: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly utilidad: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly observacion: FieldRef<"MovimientoInventario", 'String'>
    readonly createdAt: FieldRef<"MovimientoInventario", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * MovimientoInventario findUnique
   */
  export type MovimientoInventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findUniqueOrThrow
   */
  export type MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findFirst
   */
  export type MovimientoInventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findFirstOrThrow
   */
  export type MovimientoInventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findMany
   */
  export type MovimientoInventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventarios to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario create
   */
  export type MovimientoInventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
  }

  /**
   * MovimientoInventario createMany
   */
  export type MovimientoInventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoInventarios.
     */
    data: MovimientoInventarioCreateManyInput | MovimientoInventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimientoInventario createManyAndReturn
   */
  export type MovimientoInventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * The data used to create many MovimientoInventarios.
     */
    data: MovimientoInventarioCreateManyInput | MovimientoInventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoInventario update
   */
  export type MovimientoInventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
    /**
     * Choose, which MovimientoInventario to update.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario updateMany
   */
  export type MovimientoInventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number
  }

  /**
   * MovimientoInventario updateManyAndReturn
   */
  export type MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoInventario upsert
   */
  export type MovimientoInventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoInventario to update in case it exists.
     */
    where: MovimientoInventarioWhereUniqueInput
    /**
     * In case the MovimientoInventario found by the `where` argument doesn't exist, create a new MovimientoInventario with this data.
     */
    create: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
    /**
     * In case the MovimientoInventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
  }

  /**
   * MovimientoInventario delete
   */
  export type MovimientoInventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter which MovimientoInventario to delete.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario deleteMany
   */
  export type MovimientoInventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventarios to delete
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to delete.
     */
    limit?: number
  }

  /**
   * MovimientoInventario without action
   */
  export type MovimientoInventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
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


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    activo: 'activo',
    rolId: 'rolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SucursalScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SucursalScalarFieldEnum = (typeof SucursalScalarFieldEnum)[keyof typeof SucursalScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    categoriaId: 'categoriaId',
    nombre: 'nombre',
    descripcion: 'descripcion',
    codigoBarras: 'codigoBarras',
    precioCompra: 'precioCompra',
    precioVenta: 'precioVenta',
    stockMinimo: 'stockMinimo',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id: 'id',
    sucursalId: 'sucursalId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    updatedAt: 'updatedAt'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const MovimientoInventarioScalarFieldEnum: {
    id: 'id',
    sucursalId: 'sucursalId',
    productoId: 'productoId',
    usuarioId: 'usuarioId',
    tipo: 'tipo',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    costoUnitario: 'costoUnitario',
    totalVenta: 'totalVenta',
    utilidad: 'utilidad',
    observacion: 'observacion',
    createdAt: 'createdAt'
  };

  export type MovimientoInventarioScalarFieldEnum = (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>



  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>



  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>



  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>



  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>



  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>



  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>



  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>



  /**
   * Reference to a field of type 'TipoMovimiento'
   */
  export type EnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento'>



  /**
   * Reference to a field of type 'TipoMovimiento[]'
   */
  export type ListEnumTipoMovimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimiento[]'>



  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>



  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

  /**
   * Deep Input Types
   */


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: UuidFilter<"Rol"> | string
    nombre?: StringFilter<"Rol"> | string
    createdAt?: DateTimeFilter<"Rol"> | Date | string
    updatedAt?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    createdAt?: DateTimeFilter<"Rol"> | Date | string
    updatedAt?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Rol"> | string
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: UuidFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: RolOrderByWithRelationInput
    movimientosInventario?: MovimientoInventarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: UuidFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    rolId?: UuidWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type SucursalWhereInput = {
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    id?: UuidFilter<"Sucursal"> | string
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringNullableFilter<"Sucursal"> | string | null
    telefono?: StringNullableFilter<"Sucursal"> | string | null
    activo?: BoolFilter<"Sucursal"> | boolean
    createdAt?: DateTimeFilter<"Sucursal"> | Date | string
    updatedAt?: DateTimeFilter<"Sucursal"> | Date | string
    inventarios?: InventarioListRelationFilter
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }

  export type SucursalOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventarios?: InventarioOrderByRelationAggregateInput
    movimientosInventario?: MovimientoInventarioOrderByRelationAggregateInput
  }

  export type SucursalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SucursalWhereInput | SucursalWhereInput[]
    OR?: SucursalWhereInput[]
    NOT?: SucursalWhereInput | SucursalWhereInput[]
    nombre?: StringFilter<"Sucursal"> | string
    direccion?: StringNullableFilter<"Sucursal"> | string | null
    telefono?: StringNullableFilter<"Sucursal"> | string | null
    activo?: BoolFilter<"Sucursal"> | boolean
    createdAt?: DateTimeFilter<"Sucursal"> | Date | string
    updatedAt?: DateTimeFilter<"Sucursal"> | Date | string
    inventarios?: InventarioListRelationFilter
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }, "id">

  export type SucursalOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SucursalCountOrderByAggregateInput
    _max?: SucursalMaxOrderByAggregateInput
    _min?: SucursalMinOrderByAggregateInput
  }

  export type SucursalScalarWhereWithAggregatesInput = {
    AND?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    OR?: SucursalScalarWhereWithAggregatesInput[]
    NOT?: SucursalScalarWhereWithAggregatesInput | SucursalScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Sucursal"> | string
    nombre?: StringWithAggregatesFilter<"Sucursal"> | string
    direccion?: StringNullableWithAggregatesFilter<"Sucursal"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Sucursal"> | string | null
    activo?: BoolWithAggregatesFilter<"Sucursal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sucursal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sucursal"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: UuidFilter<"Categoria"> | string
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    activo?: BoolFilter<"Categoria"> | boolean
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    activo?: BoolFilter<"Categoria"> | boolean
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    productos?: ProductoListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Categoria"> | string
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
    activo?: BoolWithAggregatesFilter<"Categoria"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: UuidFilter<"Producto"> | string
    categoriaId?: UuidFilter<"Producto"> | string
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    codigoBarras?: StringNullableFilter<"Producto"> | string | null
    precioCompra?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFilter<"Producto"> | number
    activo?: BoolFilter<"Producto"> | boolean
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    inventarios?: InventarioListRelationFilter
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    inventarios?: InventarioOrderByRelationAggregateInput
    movimientosInventario?: MovimientoInventarioOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigoBarras?: string
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    categoriaId?: UuidFilter<"Producto"> | string
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precioCompra?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFilter<"Producto"> | number
    activo?: BoolFilter<"Producto"> | boolean
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    inventarios?: InventarioListRelationFilter
    movimientosInventario?: MovimientoInventarioListRelationFilter
  }, "id" | "codigoBarras">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Producto"> | string
    categoriaId?: UuidWithAggregatesFilter<"Producto"> | string
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    codigoBarras?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precioCompra?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntWithAggregatesFilter<"Producto"> | number
    activo?: BoolWithAggregatesFilter<"Producto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id?: UuidFilter<"Inventario"> | string
    sucursalId?: UuidFilter<"Inventario"> | string
    productoId?: UuidFilter<"Inventario"> | string
    cantidad?: IntFilter<"Inventario"> | number
    updatedAt?: DateTimeFilter<"Inventario"> | Date | string
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type InventarioOrderByWithRelationInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
    sucursal?: SucursalOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sucursalId_productoId?: InventarioSucursalIdProductoIdCompoundUniqueInput
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    sucursalId?: UuidFilter<"Inventario"> | string
    productoId?: UuidFilter<"Inventario"> | string
    cantidad?: IntFilter<"Inventario"> | number
    updatedAt?: DateTimeFilter<"Inventario"> | Date | string
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id" | "sucursalId_productoId">

  export type InventarioOrderByWithAggregationInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Inventario"> | string
    sucursalId?: UuidWithAggregatesFilter<"Inventario"> | string
    productoId?: UuidWithAggregatesFilter<"Inventario"> | string
    cantidad?: IntWithAggregatesFilter<"Inventario"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
  }

  export type MovimientoInventarioWhereInput = {
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    id?: UuidFilter<"MovimientoInventario"> | string
    sucursalId?: UuidFilter<"MovimientoInventario"> | string
    productoId?: UuidFilter<"MovimientoInventario"> | string
    usuarioId?: UuidFilter<"MovimientoInventario"> | string
    tipo?: EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"MovimientoInventario"> | number
    precioUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    totalVenta?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    utilidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    observacion?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MovimientoInventarioOrderByWithRelationInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrderInput | SortOrder
    costoUnitario?: SortOrderInput | SortOrder
    totalVenta?: SortOrderInput | SortOrder
    utilidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sucursal?: SucursalOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MovimientoInventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    sucursalId?: UuidFilter<"MovimientoInventario"> | string
    productoId?: UuidFilter<"MovimientoInventario"> | string
    usuarioId?: UuidFilter<"MovimientoInventario"> | string
    tipo?: EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"MovimientoInventario"> | number
    precioUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    totalVenta?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    utilidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    observacion?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
    sucursal?: XOR<SucursalScalarRelationFilter, SucursalWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MovimientoInventarioOrderByWithAggregationInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrderInput | SortOrder
    costoUnitario?: SortOrderInput | SortOrder
    totalVenta?: SortOrderInput | SortOrder
    utilidad?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MovimientoInventarioCountOrderByAggregateInput
    _avg?: MovimientoInventarioAvgOrderByAggregateInput
    _max?: MovimientoInventarioMaxOrderByAggregateInput
    _min?: MovimientoInventarioMinOrderByAggregateInput
    _sum?: MovimientoInventarioSumOrderByAggregateInput
  }

  export type MovimientoInventarioScalarWhereWithAggregatesInput = {
    AND?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    OR?: MovimientoInventarioScalarWhereWithAggregatesInput[]
    NOT?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MovimientoInventario"> | string
    sucursalId?: UuidWithAggregatesFilter<"MovimientoInventario"> | string
    productoId?: UuidWithAggregatesFilter<"MovimientoInventario"> | string
    usuarioId?: UuidWithAggregatesFilter<"MovimientoInventario"> | string
    tipo?: EnumTipoMovimientoWithAggregatesFilter<"MovimientoInventario"> | $Enums.TipoMovimiento
    cantidad?: IntWithAggregatesFilter<"MovimientoInventario"> | number
    precioUnitario?: DecimalNullableWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: DecimalNullableWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    totalVenta?: DecimalNullableWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    utilidad?: DecimalNullableWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    observacion?: StringNullableWithAggregatesFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MovimientoInventario"> | Date | string
  }

  export type RolCreateInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    rolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    rolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SucursalCreateInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioCreateNestedManyWithoutSucursalInput
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioUncheckedCreateNestedManyWithoutSucursalInput
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUpdateManyWithoutSucursalNestedInput
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUncheckedUpdateManyWithoutSucursalNestedInput
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalCreateManyInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SucursalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SucursalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    inventarios?: InventarioCreateNestedManyWithoutProductoInput
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: string
    categoriaId: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioUncheckedCreateNestedManyWithoutProductoInput
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    inventarios?: InventarioUpdateManyWithoutProductoNestedInput
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUncheckedUpdateManyWithoutProductoNestedInput
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: string
    categoriaId: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioCreateInput = {
    id?: string
    cantidad?: number
    updatedAt?: Date | string
    sucursal: SucursalCreateNestedOneWithoutInventariosInput
    producto: ProductoCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateInput = {
    id?: string
    sucursalId: string
    productoId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type InventarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sucursal?: SucursalUpdateOneRequiredWithoutInventariosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioCreateManyInput = {
    id?: string
    sucursalId: string
    productoId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type InventarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
    sucursal: SucursalCreateNestedOneWithoutMovimientosInventarioInput
    producto: ProductoCreateNestedOneWithoutMovimientosInventarioInput
    usuario: UsuarioCreateNestedOneWithoutMovimientosInventarioInput
  }

  export type MovimientoInventarioUncheckedCreateInput = {
    id?: string
    sucursalId: string
    productoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sucursal?: SucursalUpdateOneRequiredWithoutMovimientosInventarioNestedInput
    producto?: ProductoUpdateOneRequiredWithoutMovimientosInventarioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMovimientosInventarioNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioCreateManyInput = {
    id?: string
    sucursalId: string
    productoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type MovimientoInventarioListRelationFilter = {
    every?: MovimientoInventarioWhereInput
    some?: MovimientoInventarioWhereInput
    none?: MovimientoInventarioWhereInput
  }

  export type MovimientoInventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    activo?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InventarioListRelationFilter = {
    every?: InventarioWhereInput
    some?: InventarioWhereInput
    none?: InventarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SucursalCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SucursalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SucursalMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    codigoBarras?: SortOrder
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    precioCompra?: SortOrder
    precioVenta?: SortOrder
    stockMinimo?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type SucursalScalarRelationFilter = {
    is?: SucursalWhereInput
    isNot?: SucursalWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type InventarioSucursalIdProductoIdCompoundUniqueInput = {
    sucursalId: string
    productoId: string
  }

  export type InventarioCountOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type EnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type MovimientoInventarioCountOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    costoUnitario?: SortOrder
    totalVenta?: SortOrder
    utilidad?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    costoUnitario?: SortOrder
    totalVenta?: SortOrder
    utilidad?: SortOrder
  }

  export type MovimientoInventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    costoUnitario?: SortOrder
    totalVenta?: SortOrder
    utilidad?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioMinOrderByAggregateInput = {
    id?: SortOrder
    sucursalId?: SortOrder
    productoId?: SortOrder
    usuarioId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    costoUnitario?: SortOrder
    totalVenta?: SortOrder
    utilidad?: SortOrder
    observacion?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioSumOrderByAggregateInput = {
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    costoUnitario?: SortOrder
    totalVenta?: SortOrder
    utilidad?: SortOrder
  }

  export type EnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type MovimientoInventarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | MovimientoInventarioCreateWithoutUsuarioInput[] | MovimientoInventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput | MovimientoInventarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | MovimientoInventarioCreateWithoutUsuarioInput[] | MovimientoInventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput | MovimientoInventarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type MovimientoInventarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | MovimientoInventarioCreateWithoutUsuarioInput[] | MovimientoInventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput | MovimientoInventarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput | MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput | MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput | MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput> | MovimientoInventarioCreateWithoutUsuarioInput[] | MovimientoInventarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutUsuarioInput | MovimientoInventarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput | MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MovimientoInventarioCreateManyUsuarioInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput | MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput | MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type InventarioCreateNestedManyWithoutSucursalInput = {
    create?: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput> | InventarioCreateWithoutSucursalInput[] | InventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutSucursalInput | InventarioCreateOrConnectWithoutSucursalInput[]
    createMany?: InventarioCreateManySucursalInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type MovimientoInventarioCreateNestedManyWithoutSucursalInput = {
    create?: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput> | MovimientoInventarioCreateWithoutSucursalInput[] | MovimientoInventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutSucursalInput | MovimientoInventarioCreateOrConnectWithoutSucursalInput[]
    createMany?: MovimientoInventarioCreateManySucursalInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type InventarioUncheckedCreateNestedManyWithoutSucursalInput = {
    create?: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput> | InventarioCreateWithoutSucursalInput[] | InventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutSucursalInput | InventarioCreateOrConnectWithoutSucursalInput[]
    createMany?: InventarioCreateManySucursalInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutSucursalInput = {
    create?: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput> | MovimientoInventarioCreateWithoutSucursalInput[] | MovimientoInventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutSucursalInput | MovimientoInventarioCreateOrConnectWithoutSucursalInput[]
    createMany?: MovimientoInventarioCreateManySucursalInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InventarioUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput> | InventarioCreateWithoutSucursalInput[] | InventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutSucursalInput | InventarioCreateOrConnectWithoutSucursalInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutSucursalInput | InventarioUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: InventarioCreateManySucursalInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutSucursalInput | InventarioUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutSucursalInput | InventarioUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type MovimientoInventarioUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput> | MovimientoInventarioCreateWithoutSucursalInput[] | MovimientoInventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutSucursalInput | MovimientoInventarioCreateOrConnectWithoutSucursalInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutSucursalInput | MovimientoInventarioUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: MovimientoInventarioCreateManySucursalInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutSucursalInput | MovimientoInventarioUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutSucursalInput | MovimientoInventarioUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type InventarioUncheckedUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput> | InventarioCreateWithoutSucursalInput[] | InventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutSucursalInput | InventarioCreateOrConnectWithoutSucursalInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutSucursalInput | InventarioUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: InventarioCreateManySucursalInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutSucursalInput | InventarioUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutSucursalInput | InventarioUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutSucursalNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput> | MovimientoInventarioCreateWithoutSucursalInput[] | MovimientoInventarioUncheckedCreateWithoutSucursalInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutSucursalInput | MovimientoInventarioCreateOrConnectWithoutSucursalInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutSucursalInput | MovimientoInventarioUpsertWithWhereUniqueWithoutSucursalInput[]
    createMany?: MovimientoInventarioCreateManySucursalInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutSucursalInput | MovimientoInventarioUpdateWithWhereUniqueWithoutSucursalInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutSucursalInput | MovimientoInventarioUpdateManyWithWhereWithoutSucursalInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type InventarioCreateNestedManyWithoutProductoInput = {
    create?: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput> | InventarioCreateWithoutProductoInput[] | InventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | InventarioCreateOrConnectWithoutProductoInput[]
    createMany?: InventarioCreateManyProductoInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type MovimientoInventarioCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type InventarioUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput> | InventarioCreateWithoutProductoInput[] | InventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | InventarioCreateOrConnectWithoutProductoInput[]
    createMany?: InventarioCreateManyProductoInputEnvelope
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
  }

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type InventarioUpdateManyWithoutProductoNestedInput = {
    create?: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput> | InventarioCreateWithoutProductoInput[] | InventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | InventarioCreateOrConnectWithoutProductoInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutProductoInput | InventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: InventarioCreateManyProductoInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutProductoInput | InventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutProductoInput | InventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type MovimientoInventarioUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutProductoInput | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type InventarioUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput> | InventarioCreateWithoutProductoInput[] | InventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: InventarioCreateOrConnectWithoutProductoInput | InventarioCreateOrConnectWithoutProductoInput[]
    upsert?: InventarioUpsertWithWhereUniqueWithoutProductoInput | InventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: InventarioCreateManyProductoInputEnvelope
    set?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    disconnect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    delete?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    connect?: InventarioWhereUniqueInput | InventarioWhereUniqueInput[]
    update?: InventarioUpdateWithWhereUniqueWithoutProductoInput | InventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: InventarioUpdateManyWithWhereWithoutProductoInput | InventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput> | MovimientoInventarioCreateWithoutProductoInput[] | MovimientoInventarioUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutProductoInput | MovimientoInventarioCreateOrConnectWithoutProductoInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: MovimientoInventarioCreateManyProductoInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput | MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutProductoInput | MovimientoInventarioUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type SucursalCreateNestedOneWithoutInventariosInput = {
    create?: XOR<SucursalCreateWithoutInventariosInput, SucursalUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutInventariosInput
    connect?: SucursalWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutInventariosInput = {
    create?: XOR<ProductoCreateWithoutInventariosInput, ProductoUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutInventariosInput
    connect?: ProductoWhereUniqueInput
  }

  export type SucursalUpdateOneRequiredWithoutInventariosNestedInput = {
    create?: XOR<SucursalCreateWithoutInventariosInput, SucursalUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutInventariosInput
    upsert?: SucursalUpsertWithoutInventariosInput
    connect?: SucursalWhereUniqueInput
    update?: XOR<XOR<SucursalUpdateToOneWithWhereWithoutInventariosInput, SucursalUpdateWithoutInventariosInput>, SucursalUncheckedUpdateWithoutInventariosInput>
  }

  export type ProductoUpdateOneRequiredWithoutInventariosNestedInput = {
    create?: XOR<ProductoCreateWithoutInventariosInput, ProductoUncheckedCreateWithoutInventariosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutInventariosInput
    upsert?: ProductoUpsertWithoutInventariosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutInventariosInput, ProductoUpdateWithoutInventariosInput>, ProductoUncheckedUpdateWithoutInventariosInput>
  }

  export type SucursalCreateNestedOneWithoutMovimientosInventarioInput = {
    create?: XOR<SucursalCreateWithoutMovimientosInventarioInput, SucursalUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutMovimientosInventarioInput
    connect?: SucursalWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutMovimientosInventarioInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInventarioInput, ProductoUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInventarioInput
    connect?: ProductoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMovimientosInventarioInput = {
    create?: XOR<UsuarioCreateWithoutMovimientosInventarioInput, UsuarioUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimientosInventarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoMovimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimiento
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SucursalUpdateOneRequiredWithoutMovimientosInventarioNestedInput = {
    create?: XOR<SucursalCreateWithoutMovimientosInventarioInput, SucursalUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: SucursalCreateOrConnectWithoutMovimientosInventarioInput
    upsert?: SucursalUpsertWithoutMovimientosInventarioInput
    connect?: SucursalWhereUniqueInput
    update?: XOR<XOR<SucursalUpdateToOneWithWhereWithoutMovimientosInventarioInput, SucursalUpdateWithoutMovimientosInventarioInput>, SucursalUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type ProductoUpdateOneRequiredWithoutMovimientosInventarioNestedInput = {
    create?: XOR<ProductoCreateWithoutMovimientosInventarioInput, ProductoUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutMovimientosInventarioInput
    upsert?: ProductoUpsertWithoutMovimientosInventarioInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutMovimientosInventarioInput, ProductoUpdateWithoutMovimientosInventarioInput>, ProductoUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMovimientosInventarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutMovimientosInventarioInput, UsuarioUncheckedCreateWithoutMovimientosInventarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMovimientosInventarioInput
    upsert?: UsuarioUpsertWithoutMovimientosInventarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMovimientosInventarioInput, UsuarioUpdateWithoutMovimientosInventarioInput>, UsuarioUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoMovimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoFilter<$PrismaModel> | $Enums.TipoMovimiento
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimiento | EnumTipoMovimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimiento[] | ListEnumTipoMovimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimientoFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: UuidFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    activo?: BoolFilter<"Usuario"> | boolean
    rolId?: UuidFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type RolCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type MovimientoInventarioCreateWithoutUsuarioInput = {
    id?: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
    sucursal: SucursalCreateNestedOneWithoutMovimientosInventarioInput
    producto: ProductoCreateNestedOneWithoutMovimientosInventarioInput
  }

  export type MovimientoInventarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    sucursalId: string
    productoId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioCreateOrConnectWithoutUsuarioInput = {
    where: MovimientoInventarioWhereUniqueInput
    create: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimientoInventarioCreateManyUsuarioInputEnvelope = {
    data: MovimientoInventarioCreateManyUsuarioInput | MovimientoInventarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MovimientoInventarioWhereUniqueInput
    update: XOR<MovimientoInventarioUpdateWithoutUsuarioInput, MovimientoInventarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MovimientoInventarioCreateWithoutUsuarioInput, MovimientoInventarioUncheckedCreateWithoutUsuarioInput>
  }

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MovimientoInventarioWhereUniqueInput
    data: XOR<MovimientoInventarioUpdateWithoutUsuarioInput, MovimientoInventarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type MovimientoInventarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: MovimientoInventarioScalarWhereInput
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MovimientoInventarioScalarWhereInput = {
    AND?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    OR?: MovimientoInventarioScalarWhereInput[]
    NOT?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    id?: UuidFilter<"MovimientoInventario"> | string
    sucursalId?: UuidFilter<"MovimientoInventario"> | string
    productoId?: UuidFilter<"MovimientoInventario"> | string
    usuarioId?: UuidFilter<"MovimientoInventario"> | string
    tipo?: EnumTipoMovimientoFilter<"MovimientoInventario"> | $Enums.TipoMovimiento
    cantidad?: IntFilter<"MovimientoInventario"> | number
    precioUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    totalVenta?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    utilidad?: DecimalNullableFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string | null
    observacion?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
  }

  export type InventarioCreateWithoutSucursalInput = {
    id?: string
    cantidad?: number
    updatedAt?: Date | string
    producto: ProductoCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateWithoutSucursalInput = {
    id?: string
    productoId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type InventarioCreateOrConnectWithoutSucursalInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput>
  }

  export type InventarioCreateManySucursalInputEnvelope = {
    data: InventarioCreateManySucursalInput | InventarioCreateManySucursalInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoInventarioCreateWithoutSucursalInput = {
    id?: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
    producto: ProductoCreateNestedOneWithoutMovimientosInventarioInput
    usuario: UsuarioCreateNestedOneWithoutMovimientosInventarioInput
  }

  export type MovimientoInventarioUncheckedCreateWithoutSucursalInput = {
    id?: string
    productoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioCreateOrConnectWithoutSucursalInput = {
    where: MovimientoInventarioWhereUniqueInput
    create: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput>
  }

  export type MovimientoInventarioCreateManySucursalInputEnvelope = {
    data: MovimientoInventarioCreateManySucursalInput | MovimientoInventarioCreateManySucursalInput[]
    skipDuplicates?: boolean
  }

  export type InventarioUpsertWithWhereUniqueWithoutSucursalInput = {
    where: InventarioWhereUniqueInput
    update: XOR<InventarioUpdateWithoutSucursalInput, InventarioUncheckedUpdateWithoutSucursalInput>
    create: XOR<InventarioCreateWithoutSucursalInput, InventarioUncheckedCreateWithoutSucursalInput>
  }

  export type InventarioUpdateWithWhereUniqueWithoutSucursalInput = {
    where: InventarioWhereUniqueInput
    data: XOR<InventarioUpdateWithoutSucursalInput, InventarioUncheckedUpdateWithoutSucursalInput>
  }

  export type InventarioUpdateManyWithWhereWithoutSucursalInput = {
    where: InventarioScalarWhereInput
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyWithoutSucursalInput>
  }

  export type InventarioScalarWhereInput = {
    AND?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    OR?: InventarioScalarWhereInput[]
    NOT?: InventarioScalarWhereInput | InventarioScalarWhereInput[]
    id?: UuidFilter<"Inventario"> | string
    sucursalId?: UuidFilter<"Inventario"> | string
    productoId?: UuidFilter<"Inventario"> | string
    cantidad?: IntFilter<"Inventario"> | number
    updatedAt?: DateTimeFilter<"Inventario"> | Date | string
  }

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutSucursalInput = {
    where: MovimientoInventarioWhereUniqueInput
    update: XOR<MovimientoInventarioUpdateWithoutSucursalInput, MovimientoInventarioUncheckedUpdateWithoutSucursalInput>
    create: XOR<MovimientoInventarioCreateWithoutSucursalInput, MovimientoInventarioUncheckedCreateWithoutSucursalInput>
  }

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutSucursalInput = {
    where: MovimientoInventarioWhereUniqueInput
    data: XOR<MovimientoInventarioUpdateWithoutSucursalInput, MovimientoInventarioUncheckedUpdateWithoutSucursalInput>
  }

  export type MovimientoInventarioUpdateManyWithWhereWithoutSucursalInput = {
    where: MovimientoInventarioScalarWhereInput
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyWithoutSucursalInput>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioCreateNestedManyWithoutProductoInput
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioUncheckedCreateNestedManyWithoutProductoInput
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: UuidFilter<"Producto"> | string
    categoriaId?: UuidFilter<"Producto"> | string
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    codigoBarras?: StringNullableFilter<"Producto"> | string | null
    precioCompra?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFilter<"Producto"> | number
    activo?: BoolFilter<"Producto"> | boolean
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
  }

  export type CategoriaCreateWithoutProductosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type InventarioCreateWithoutProductoInput = {
    id?: string
    cantidad?: number
    updatedAt?: Date | string
    sucursal: SucursalCreateNestedOneWithoutInventariosInput
  }

  export type InventarioUncheckedCreateWithoutProductoInput = {
    id?: string
    sucursalId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type InventarioCreateOrConnectWithoutProductoInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput>
  }

  export type InventarioCreateManyProductoInputEnvelope = {
    data: InventarioCreateManyProductoInput | InventarioCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoInventarioCreateWithoutProductoInput = {
    id?: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
    sucursal: SucursalCreateNestedOneWithoutMovimientosInventarioInput
    usuario: UsuarioCreateNestedOneWithoutMovimientosInventarioInput
  }

  export type MovimientoInventarioUncheckedCreateWithoutProductoInput = {
    id?: string
    sucursalId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioCreateOrConnectWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    create: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoInventarioCreateManyProductoInputEnvelope = {
    data: MovimientoInventarioCreateManyProductoInput | MovimientoInventarioCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioUpsertWithWhereUniqueWithoutProductoInput = {
    where: InventarioWhereUniqueInput
    update: XOR<InventarioUpdateWithoutProductoInput, InventarioUncheckedUpdateWithoutProductoInput>
    create: XOR<InventarioCreateWithoutProductoInput, InventarioUncheckedCreateWithoutProductoInput>
  }

  export type InventarioUpdateWithWhereUniqueWithoutProductoInput = {
    where: InventarioWhereUniqueInput
    data: XOR<InventarioUpdateWithoutProductoInput, InventarioUncheckedUpdateWithoutProductoInput>
  }

  export type InventarioUpdateManyWithWhereWithoutProductoInput = {
    where: InventarioScalarWhereInput
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyWithoutProductoInput>
  }

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    update: XOR<MovimientoInventarioUpdateWithoutProductoInput, MovimientoInventarioUncheckedUpdateWithoutProductoInput>
    create: XOR<MovimientoInventarioCreateWithoutProductoInput, MovimientoInventarioUncheckedCreateWithoutProductoInput>
  }

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutProductoInput = {
    where: MovimientoInventarioWhereUniqueInput
    data: XOR<MovimientoInventarioUpdateWithoutProductoInput, MovimientoInventarioUncheckedUpdateWithoutProductoInput>
  }

  export type MovimientoInventarioUpdateManyWithWhereWithoutProductoInput = {
    where: MovimientoInventarioScalarWhereInput
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyWithoutProductoInput>
  }

  export type SucursalCreateWithoutInventariosInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateWithoutInventariosInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalCreateOrConnectWithoutInventariosInput = {
    where: SucursalWhereUniqueInput
    create: XOR<SucursalCreateWithoutInventariosInput, SucursalUncheckedCreateWithoutInventariosInput>
  }

  export type ProductoCreateWithoutInventariosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    movimientosInventario?: MovimientoInventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutInventariosInput = {
    id?: string
    categoriaId: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movimientosInventario?: MovimientoInventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutInventariosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutInventariosInput, ProductoUncheckedCreateWithoutInventariosInput>
  }

  export type SucursalUpsertWithoutInventariosInput = {
    update: XOR<SucursalUpdateWithoutInventariosInput, SucursalUncheckedUpdateWithoutInventariosInput>
    create: XOR<SucursalCreateWithoutInventariosInput, SucursalUncheckedCreateWithoutInventariosInput>
    where?: SucursalWhereInput
  }

  export type SucursalUpdateToOneWithWhereWithoutInventariosInput = {
    where?: SucursalWhereInput
    data: XOR<SucursalUpdateWithoutInventariosInput, SucursalUncheckedUpdateWithoutInventariosInput>
  }

  export type SucursalUpdateWithoutInventariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateWithoutInventariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type ProductoUpsertWithoutInventariosInput = {
    update: XOR<ProductoUpdateWithoutInventariosInput, ProductoUncheckedUpdateWithoutInventariosInput>
    create: XOR<ProductoCreateWithoutInventariosInput, ProductoUncheckedCreateWithoutInventariosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutInventariosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutInventariosInput, ProductoUncheckedUpdateWithoutInventariosInput>
  }

  export type ProductoUpdateWithoutInventariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutInventariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type SucursalCreateWithoutMovimientosInventarioInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioCreateNestedManyWithoutSucursalInput
  }

  export type SucursalUncheckedCreateWithoutMovimientosInventarioInput = {
    id?: string
    nombre: string
    direccion?: string | null
    telefono?: string | null
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioUncheckedCreateNestedManyWithoutSucursalInput
  }

  export type SucursalCreateOrConnectWithoutMovimientosInventarioInput = {
    where: SucursalWhereUniqueInput
    create: XOR<SucursalCreateWithoutMovimientosInventarioInput, SucursalUncheckedCreateWithoutMovimientosInventarioInput>
  }

  export type ProductoCreateWithoutMovimientosInventarioInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    inventarios?: InventarioCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutMovimientosInventarioInput = {
    id?: string
    categoriaId: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventarios?: InventarioUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutMovimientosInventarioInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutMovimientosInventarioInput, ProductoUncheckedCreateWithoutMovimientosInventarioInput>
  }

  export type UsuarioCreateWithoutMovimientosInventarioInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutMovimientosInventarioInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    rolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutMovimientosInventarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMovimientosInventarioInput, UsuarioUncheckedCreateWithoutMovimientosInventarioInput>
  }

  export type SucursalUpsertWithoutMovimientosInventarioInput = {
    update: XOR<SucursalUpdateWithoutMovimientosInventarioInput, SucursalUncheckedUpdateWithoutMovimientosInventarioInput>
    create: XOR<SucursalCreateWithoutMovimientosInventarioInput, SucursalUncheckedCreateWithoutMovimientosInventarioInput>
    where?: SucursalWhereInput
  }

  export type SucursalUpdateToOneWithWhereWithoutMovimientosInventarioInput = {
    where?: SucursalWhereInput
    data: XOR<SucursalUpdateWithoutMovimientosInventarioInput, SucursalUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type SucursalUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUpdateManyWithoutSucursalNestedInput
  }

  export type SucursalUncheckedUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUncheckedUpdateManyWithoutSucursalNestedInput
  }

  export type ProductoUpsertWithoutMovimientosInventarioInput = {
    update: XOR<ProductoUpdateWithoutMovimientosInventarioInput, ProductoUncheckedUpdateWithoutMovimientosInventarioInput>
    create: XOR<ProductoCreateWithoutMovimientosInventarioInput, ProductoUncheckedCreateWithoutMovimientosInventarioInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutMovimientosInventarioInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutMovimientosInventarioInput, ProductoUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type ProductoUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    inventarios?: InventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioUpsertWithoutMovimientosInventarioInput = {
    update: XOR<UsuarioUpdateWithoutMovimientosInventarioInput, UsuarioUncheckedUpdateWithoutMovimientosInventarioInput>
    create: XOR<UsuarioCreateWithoutMovimientosInventarioInput, UsuarioUncheckedCreateWithoutMovimientosInventarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMovimientosInventarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMovimientosInventarioInput, UsuarioUncheckedUpdateWithoutMovimientosInventarioInput>
  }

  export type UsuarioUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMovimientosInventarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    rolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id?: string
    nombre: string
    email: string
    password: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioCreateManyUsuarioInput = {
    id?: string
    sucursalId: string
    productoId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sucursal?: SucursalUpdateOneRequiredWithoutMovimientosInventarioNestedInput
    producto?: ProductoUpdateOneRequiredWithoutMovimientosInventarioNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioCreateManySucursalInput = {
    id?: string
    productoId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type MovimientoInventarioCreateManySucursalInput = {
    id?: string
    productoId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type InventarioUpdateWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioUncheckedUpdateManyWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUpdateWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductoUpdateOneRequiredWithoutMovimientosInventarioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMovimientosInventarioNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutSucursalInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    codigoBarras?: string | null
    precioCompra: Decimal | DecimalJsLike | number | string
    precioVenta: Decimal | DecimalJsLike | number | string
    stockMinimo?: number
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUpdateManyWithoutProductoNestedInput
    movimientosInventario?: MovimientoInventarioUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventarios?: InventarioUncheckedUpdateManyWithoutProductoNestedInput
    movimientosInventario?: MovimientoInventarioUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    precioCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioVenta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioCreateManyProductoInput = {
    id?: string
    sucursalId: string
    cantidad?: number
    updatedAt?: Date | string
  }

  export type MovimientoInventarioCreateManyProductoInput = {
    id?: string
    sucursalId: string
    usuarioId: string
    tipo: $Enums.TipoMovimiento
    cantidad: number
    precioUnitario?: Decimal | DecimalJsLike | number | string | null
    costoUnitario?: Decimal | DecimalJsLike | number | string | null
    totalVenta?: Decimal | DecimalJsLike | number | string | null
    utilidad?: Decimal | DecimalJsLike | number | string | null
    observacion?: string | null
    createdAt?: Date | string
  }

  export type InventarioUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sucursal?: SucursalUpdateOneRequiredWithoutInventariosNestedInput
  }

  export type InventarioUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventarioUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sucursal?: SucursalUpdateOneRequiredWithoutMovimientosInventarioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMovimientosInventarioNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    sucursalId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimientoFieldUpdateOperationsInput | $Enums.TipoMovimiento
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    costoUnitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalVenta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    utilidad?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
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