const help = (prefix, botname, oname) => {
	return `
「 *${botname}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${oname}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}KujiraApps
  └─ ❏ ${prefix}bugreport
◪ *TANYA*
  │
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  └─ ❏ ${prefix}bisakah
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  └─ ❏ ${prefix}joox
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo
◪ *GROUP*
  │
  ├─ ❏ ${prefix}opengc
  ├─ ❏ ${prefix}closegc
  ├─ ❏ ${prefix}promote
  ├─ ❏ ${prefix}demote
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}tagall2
  ├─ ❏ ${prefix}tagall3
  ├─ ❏ ${prefix}tagall4
  ├─ ❏ ${prefix}tagall5
  ├─ ❏ ${prefix}add
  ├─ ❏ ${prefix}kick
  ├─ ❏ ${prefix}listadmins
  ├─ ❏ ${prefix}linkgroup
  ├─ ❏ ${prefix}leave
  └─ ❏ ${prefix}ownergroup
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  └─ ❏ ${prefix}clearall
◪
◪ *${oname}*
`
}

exports.help = help
