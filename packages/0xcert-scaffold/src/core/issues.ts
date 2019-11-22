/**
 * Error codes.
 */
export enum ProviderIssue {
  // General errors.
  GENERAL = '0',
  CONTRACT_ERROR = '1',

  // Framework errors.
  ACTIONS_ORDER_KIND_NOT_SUPPORTED = '5000001',
  DYNAMIC_ACTIONS_ORDER_SIGNATURES = '5000002',
  FIXED_ACTIONS_ORDER_SIGNATURES = '5000003',
  SIGNED_DYNAMIC_ACTIONS_ORDER_SIGNATURES = '5000004',
  SIGNED_FIXED_ACTIONS_ORDER_SIGNATURES = '5000005',
  NO_RECEIVER_ID = '5000006',
  PROXY_KIND_NOT_SUPPORTED = '5000007',
  SENDER_ID_NOT_A_SIGNER = '5000008',
  SENDER_ID_AND_RECEIVER_ID_MISSING = '5000009',
  ACTION_KIND_NOT_SUPPORTED = '5000010',
  ERC20_APPROVAL_RACE_CONDITION = '5000011',

  // Smart contract errors.
  // ERC 20 contract errors.
  ERC20_NOT_ENOUGH_BALANCE = '001001',
  ERC20_NOT_ENOUGH_ALLOWANCE = '001002',
  // ERC721 contract errors.
  ERC721_ZERO_ADDRESS = '003001',
  ERC721_NOT_VALID_NFT = '003002',
  ERC721_NOT_OWNER_OR_OPERATOR = '003003',
  ERC721_NOT_OWNER_APPROWED_OR_OPERATOR = '003004',
  ERC721_NOT_ABLE_TO_RECEIVE_NFT = '003005',
  ERC721_NFT_ALREADY_EXISTS = '003006',
  // ERC721 metadata contract errors.
  ERC721_METADATA_ZERO_ADDRESS = '004001',
  ERC721_METADATA_NOT_VALID_NFT = '004002',
  ERC721_METADATA_NOT_OWNER_OR_OPERATOR = '004003',
  ERC721_METADATA_NOT_OWNER_APPROWED_OR_OPERATOR = '004004',
  ERC721_METADATA_NOT_ABLE_TO_RECEIVE_NFT = '004005',
  ERC721_METADATA_NFT_ALREADY_EXISTS = '004006',
  // ERC721 enumerable contract errors.
  ERC721_ENUMERABLE_ZERO_ADDRESS = '005001',
  ERC721_ENUMERABLE_NOT_VALID_NFT = '005002',
  ERC721_ENUMERABLE_NOT_OWNER_OR_OPERATOR = '005003',
  ERC721_ENUMERABLE_NOT_OWNER_APPROWED_OR_OPERATOR = '005004',
  ERC721_ENUMERABLE_NOT_ABLE_TO_RECEIVE_NFT = '005005',
  ERC721_ENUMERABLE_NFT_ALREADY_EXISTS = '005006',
  ERC721_ENUMERABLE_INVALID_INDEX = '005007',
  // ERC721 metadata enumerable contract errors.
  ERC721_METADATA_ENUMERABLE_ZERO_ADDRESS = '006001',
  ERC721_METADATA_ENUMERABLE_NOT_VALID_NFT = '006002',
  ERC721_METADATA_ENUMERABLE_NOT_OWNER_OR_OPERATOR = '006003',
  ERC721_METADATA_ENUMERABLE_NOT_OWNER_APPROWED_OR_OPERATOR = '006004',
  ERC721_METADATA_ENUMERABLE_NOT_ABLE_TO_RECEIVE_NFT = '006005',
  ERC721_METADATA_ENUMERABLE_NFT_ALREADY_EXISTS = '006006',
  ERC721_METADATA_ENUMERABLE_INVALID_INDEX = '006007',
  // Xcert contract errors.
  XCERT_CAPABILITY_NOT_SUPPORTED = '007001',
  XCERT_TRANSFERS_DISABLED = '007002',
  XCERT_NOT_VALID_XCERT = '007003',
  XCERT_NOT_OWNER_OR_OPERATOR = '007004',
  XCERT_INVALID_SIGNATURE = '007005',
  XCERT_INVALID_SIGNATURE_KIND = '007006',
  XCERT_CLAIM_PERFORMED = '007007',
  XCERT_CLAIM_EXPIRED = '007008',
  // Safe math lib errors.
  SAFE_MATH_OVERFLOW = '008001',
  SAFE_MATH_SUBTRAHEND_GREATER_THEN_MINUEND = '008002',
  SAFE_MATH_DIVISION_BY_ZERO = '008003',
  // Xcert deploy gateway contract errors.
  XCERT_DEPLOY_GATEWAY_INVALID_SIGNATURE_KIND = '009001',
  XCERT_DEPLOY_GATEWAY_TAKER_NOT_EQUAL_TO_SENDER = '009002',
  XCERT_DEPLOY_GATEWAY_CLAIM_EXPIRED = '009003',
  XCERT_DEPLOY_GATEWAY_INVALID_SIGNATURE = '009004',
  XCERT_DEPLOY_GATEWAY_DEPLOY_CANCELED = '009005',
  XCERT_DEPLOY_GATEWAY_DEPLOY_ALREADY_PERFORMED = '009006',
  XCERT_DEPLOY_GATEWAY_MAKER_NOT_EQUAL_TO_SENDER = '009007',
  // Dapp token contract errors.
  DAPP_TOKEN_NOT_ENOUGH_BALANCE = '010001',
  DAPP_TOKEN_NOT_ENOUGH_ALLOWANCE = '010002',
  DAPP_TOKEN_NOT_WHITELISTED_ADDRESS = '010003',
  DAPP_TOKEN_NOT_MIGRATION_NOT_STARTED = '010004',
  DAPP_TOKEN_MIGRATION_STARTED= '010005',
  DAPP_TOKEN_NOT_ABLE_TO_MIGRATE = '010006',
  // ERC20 deploy gateway contract errors.
  ERC20_DEPLOY_GATEWAY_INVALID_SIGNATURE_KIND = '011001',
  ERC20_DEPLOY_GATEWAY_TAKER_NOT_EQUAL_TO_SENDER = '011002',
  ERC20_DEPLOY_GATEWAY_CLAIM_EXPIRED = '011003',
  ERC20_DEPLOY_GATEWAY_INVALID_SIGNATURE = '011004',
  ERC20_DEPLOY_GATEWAY_DEPLOY_CANCELED = '011005',
  ERC20_DEPLOY_GATEWAY_DEPLOY_ALREADY_PERFORMED = '011006',
  ERC20_DEPLOY_GATEWAY_MAKER_NOT_EQUAL_TO_SENDER = '011007',
  // Token transfer proxy contract errors.
  ERC20_TRANSFER_PROXY_TRANSFER_FAILED = '012001',
  // Actions gateway contract errors.
  ACTIONS_GATEWAY_INVALID_SIGNATURE_KIND = '015001',
  ACTIONS_GATEWAY_INVALID_PROXY = '015002',
  ACTIONS_GATEWAY_SIGNATURES_LENGTH_INVALID = '015003',
  ACTIONS_GATEWAY_SENDER_NOT_A_SIGNER = '015004',
  ACTIONS_GATEWAY_CLAIM_EXPIRED = '015005',
  ACTIONS_GATEWAY_INVALID_SIGNATURE = '015006',
  ACTIONS_GATEWAY_ORDER_CANCELED = '015007',
  ACTIONS_GATEWAY_ORDER_ALREADY_PERFORMED = '015008',
  ACTIONS_GATEWAY_SIGNERS_DOES_NOT_INCLUDE_SENDER = '015009',
  ACTIONS_GATEWAY_SIGNER_NOT_AUTHORIZED = '015010',
  // Abilitable contract errors.
  ABILITABLE_NOT_AUTHORIZED = '017001',
  ABILITABLE_INVALID_INPUT = '017002',
  // Ownable contract errors.
  OWNABLE_NOT_OWNER = '018001',
  OWNABLE_ZERO_ADDRESS = '018002',
  // Claimable contract errors.
  CLAIMABLE_NOT_PENDING_OWNER = '019001',
}
