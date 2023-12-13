import { Signer } from "ethers";
import { ChainId } from "../../core-types";
import { BigNumberish } from "ethers";
import { IBundler } from "../../bundler";
import { IPaymaster } from "../../paymaster";
import { BaseValidationModule, DEFAULT_ECDSA_OWNERSHIP_MODULE, DEFAULT_MULTICHAIN_MODULE, ModuleInfo } from "../../modules";
import { Provider } from "@ethersproject/providers";
import { GasOverheads } from "./Preverificaiton";
import { WalletClientSigner } from "@alchemy/aa-core";

export type EntryPointAddresses = {
  [address: string]: string;
};

export type BiconomyFactories = {
  [address: string]: string;
};

export type BiconomyImplementations = {
  [address: string]: string;
};

export type EntryPointAddressesByVersion = {
  [version: string]: string;
};

export type BiconomyFactoriesByVersion = {
  [version: string]: string;
};

export type BiconomyImplementationsByVersion = {
  [version: string]: string;
};

export type SmartAccountConfig = {
  entryPointAddress: string;
  bundler?: IBundler;
};

export interface BaseSmartAccountConfig {
  // owner?: Signer // can be in child classes
  index?: number;
  provider?: Provider;
  entryPointAddress?: string;
  accountAddress?: string;
  overheads?: Partial<GasOverheads>;
  paymaster?: IPaymaster; // PaymasterAPI
  bundler?: IBundler; // like HttpRpcClient
  chainId: ChainId;
}

// export type BiconomyTokenPaymasterRequest = {
//   feeQuote: PaymasterFeeQuote;
//   spender: string;
//   maxApproval?: boolean;
// };

export type BiconomySmartAccountConfig = {
  signer: Signer;
  rpcUrl?: string;
  chainId: ChainId;
  entryPointAddress?: string;
  bundler?: IBundler;
  paymaster?: IPaymaster;
  nodeClientUrl?: string;
};

export enum AuthorizationModuleType {
  ECDSA_OWNERSHIP = DEFAULT_ECDSA_OWNERSHIP_MODULE,
  MULTICHAIN = DEFAULT_MULTICHAIN_MODULE,
}

export interface BiconomySmartAccountV2Config extends BaseSmartAccountConfig {
  factoryAddress?: string;
  implementationAddress?: string;
  defaultFallbackHandler?: string;
  biconomyPaymasterApiKey?: string;
  signer: Signer | WalletClientSigner;
  rpcUrl?: string; // as good as Provider
  nodeClientUrl?: string; // very specific to Biconomy
  authorizationModuleType?: AuthorizationModuleType;
  defaultValidationModule?: BaseValidationModule;
  activeValidationModule?: BaseValidationModule;
}

export type BuildUserOpOptions = {
  overrides?: Overrides;
  skipBundlerGasEstimation?: boolean;
  params?: ModuleInfo;
  nonceOptions?: NonceOptions;
  forceEncodeForBatch?: boolean;
};

export type NonceOptions = {
  nonceKey?: number;
  nonceOverride?: number;
};

export type Overrides = {
  callGasLimit?: BigNumberish;
  verificationGasLimit?: BigNumberish;
  preVerificationGas?: BigNumberish;
  maxFeePerGas?: BigNumberish;
  maxPriorityFeePerGas?: BigNumberish;
  paymasterData?: string;
  signature?: string;
};

export type InitilizationData = {
  accountIndex?: number;
  signerAddress?: string;
};

export type InitializeV2Data = {
  accountIndex?: number;
};

export interface TransactionDetailsForUserOp {
  target: string;
  data: string;
  value?: BigNumberish;
  gasLimit?: BigNumberish;
  maxFeePerGas?: BigNumberish;
  maxPriorityFeePerGas?: BigNumberish;
  nonce?: BigNumberish;
}

export type CounterFactualAddressParam = {
  index?: number;
  validationModule?: BaseValidationModule;
};
